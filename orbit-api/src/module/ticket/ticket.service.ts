import { Injectable, NotFoundException } from '@nestjs/common'; // Importe as exceções!
import { CreateTicketDto } from './dto/create-ticket.dto';
import { UpdateTicketDto } from './dto/update-ticket.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TicketService {
  constructor(private prisma: PrismaService) {}

  async create(createTicketDto: CreateTicketDto, authorId: string) {
    return this.prisma.ticket.create({
      data: {
        ...createTicketDto, 
        authorId,           
      },
    });
  }

  async findAll() {
    return this.prisma.ticket.findMany({
      include: {
        author: true,     
        category: true,   
        assignee: true,   
      },
      orderBy: { createdAt: 'desc' } 
    });
  }

  async findOne(id: string) {
    const ticket = await this.prisma.ticket.findUnique({
      where: { id },
      include: { author: true, category: true, assignee: true },
    });

    if (!ticket) {
      throw new NotFoundException('Chamado não encontrado no sistema.'); // Erro 404 elegante
    }
    return ticket;
  }
  
  async update(id: string, updateTicketDto: UpdateTicketDto) {
    await this.findOne(id); 
    return this.prisma.ticket.update({
      where: { id },
      data: updateTicketDto,
    });
  }

  async delete(id: string) {
    await this.findOne(id); 

    return this.prisma.ticket.delete({
      where: { id },
    });
  }
}