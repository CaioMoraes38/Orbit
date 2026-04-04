import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Req, UseInterceptors, ClassSerializerInterceptor } from '@nestjs/common';
import { TicketService } from './ticket.service';
import { CreateTicketDto } from './dto/create-ticket.dto';
import { UpdateTicketDto } from './dto/update-ticket.dto';
import { JwtAuthGuard } from '../../auth/jwt.guard'; 
import { TicketEntity } from './entities/ticket.entity';
import { ApiBearerAuth } from '@nestjs/swagger';

@ApiBearerAuth()
@Controller('tickets') 
@UseInterceptors(ClassSerializerInterceptor) 
@UseGuards(JwtAuthGuard) 
export class TicketController {
  constructor(private readonly ticketService: TicketService) {}

  @Post()
  async create(
    @Body() createTicketDto: CreateTicketDto, 
    @Req() req: any 
  ) {
    const authorId = req.user.id; 
    
    const ticket = await this.ticketService.create(createTicketDto, authorId);
    return new TicketEntity(ticket);
  }

  @Get()
  async findAll() {
    const tickets = await this.ticketService.findAll();
    return tickets.map(ticket => new TicketEntity(ticket));
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const ticket = await this.ticketService.findOne(id);
    return new TicketEntity(ticket);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateTicketDto: UpdateTicketDto) {
    const ticket = await this.ticketService.update(id, updateTicketDto);
    return new TicketEntity(ticket);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    const ticket = await this.ticketService.delete(id);
    return new TicketEntity(ticket);
  }
}