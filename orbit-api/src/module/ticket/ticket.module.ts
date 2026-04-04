import { Module } from '@nestjs/common';
import { TicketService } from './ticket.service';
import { TicketController } from './ticket.controller';
import { PrismaModule } from 'src/prisma/prisma.module'; // Provavelmente você já tem esse
import { AuthModule } from 'src/auth/auth.module'; // <-- 1. Importe o AuthModule

@Module({
  imports: [
    PrismaModule, 
    AuthModule     
  ],
  controllers: [TicketController],
  providers: [TicketService],
})
export class TicketModule {}