
import { IsEmail, IsEnum, IsNotEmpty, IsOptional, IsString, MinLength } from 'class-validator';
import { Role } from 'src/generated/prisma/enums'; 

export class CreateUserDto {
  @IsString()
  @IsNotEmpty({ message: 'O nome não pode estar vazio' })
  name!: string;

  @IsEmail({}, { message: 'Formato de e-mail inválido' })
  email!: string;

  @IsString()
  @MinLength(6, { message: 'A senha deve ter no mínimo 6 caracteres' })
  password!: string;

  @IsOptional()
  @IsEnum(Role, { message: 'O cargo deve ser USER, TECH ou ADMIN' })
  role?: Role; 
}