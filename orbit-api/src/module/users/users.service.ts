import { Injectable, ConflictException, NotFoundException, ForbiddenException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import {FindAllUsersDto} from './dto/find-all-users.dto'
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UsersService {

  constructor(private  prisma: PrismaService){}

  async create( createUserDto: CreateUserDto){
    const userExist = await this.prisma.user.findUnique({
      where:{
        email:createUserDto.email
      }
    });
    if(userExist){
      throw new ConflictException('Email já cadastrado')
    }
    return this.prisma.user.create({
      data:createUserDto
    })
  }

  async findAll(query: FindAllUsersDto) {
    
    const page = Number(query.page) || 1;
    const limit = Number(query.limit) || 10;
    const search = query.search;
    const skip = (page - 1) * limit;

    const whereCondition = search ? {
      OR: [
        { name: { contains: search, mode: 'insensitive' as const } },
        { email: { contains: search, mode: 'insensitive' as const } }
      ]
    } : {};

    const [users, total] = await Promise.all([
      this.prisma.user.findMany({
        where: whereCondition, 
        skip: skip,
        take: limit,
        orderBy: { createdAt: 'desc' }, 
      }),
      this.prisma.user.count({ where: whereCondition }), 
    ]);

    const totalPages = Math.ceil(total / limit);
    
    return {
      data: users,
      meta: {
        totalItems: total,
        itemsPerPage: limit,
        currentPage: page,
        totalPages: totalPages,
      },
    };
  }

  async update(id: string, updateUserDto: UpdateUserDto, requesterRole:string) { 
    
    if (updateUserDto.role && requesterRole !== 'ADMIN') {
      throw new ForbiddenException('Acesso negado: Apenas Administradores podem alterar cargos.');
    }

    const user = await this.prisma.user.findUnique({
      where: { id },
    });

    if (!user) {
      throw new NotFoundException('Usuário não encontrado no sistema.');
    }
    if (updateUserDto.email && updateUserDto.email !== user.email) {
      const emailInUse = await this.prisma.user.findUnique({
        where: { email: updateUserDto.email },
      });
      if (emailInUse) {
        throw new ConflictException('Este e-mail já está sendo usado por outro usuário.');
      }
    }    return this.prisma.user.update({
      where: { id },
      data: updateUserDto,
    });
  }

}
