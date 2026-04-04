// Não esqueça de ajustar o caminho do import do seu Prisma
import { Ticket, User, Category } from 'src/generated/prisma/client'; 
import { Priority, TicketStatus } from 'src/generated/prisma/enums';

export class TicketEntity implements Ticket {
  id!: string;
  title!: string;
  description!: string;
  status!: TicketStatus;
  priority!: Priority;
  createdAt!: Date;
  updatedAt!: Date;
  authorId!: string;
  categoryId!: string;
  assigneeId!: string | null; 
  resolutionNote!:string | null;
  author?: User;
  assignee?: User | null;
  category?: Category;
  constructor(partial: Partial<TicketEntity>) {
    Object.assign(this, partial);
  }
}