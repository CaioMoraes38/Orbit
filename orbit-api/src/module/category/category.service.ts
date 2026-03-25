import { ConflictException, Injectable,NotFoundException } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CategoryService {
  constructor(private prismaService:PrismaService){}

  async findAll(){
    return this.prismaService.category.findMany()
  }

  async create(createCategoryDto:CreateCategoryDto){
    const categoryExist = await this.prismaService.category.findFirst({
      where:{
        name:createCategoryDto.name
      }
    });
    if(categoryExist){
      throw new ConflictException('Categoria já existente')
    }
   
    return this.prismaService.category.create({
      data:createCategoryDto
    })
   
  }
  async delete(id: string) {
    const categoryExists = await this.prismaService.category.findUnique({
      where: { id } 
    });
    if (!categoryExists) {
      throw new NotFoundException('Categoria não encontrada.');    }
    return this.prismaService.category.delete({
      where: { id } 
    });
  }

}