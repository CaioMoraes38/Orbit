import { Module } from '@nestjs/common';
import { UsersModule } from './module/users/users.module'; 
import { CategoryModule } from './module/category/category.module';
import { TicketModule } from './module/ticket/ticket.module'; 
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    UsersModule, 
    CategoryModule, 
    TicketModule, 
    AuthModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}