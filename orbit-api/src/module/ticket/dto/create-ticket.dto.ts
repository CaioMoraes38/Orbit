import { IsNotEmpty, IsString, IsEnum } from 'class-validator';
import { Priority } from 'src/generated/prisma/enums'; 

export class CreateTicketDto {
  @IsString()
  @IsNotEmpty()
  title!: string;

  @IsString()
  @IsNotEmpty()
  description!: string;

  @IsEnum(Priority)
  @IsNotEmpty()
  priority!: Priority;

  @IsString()
  @IsNotEmpty()
  categoryId!: string; 

}