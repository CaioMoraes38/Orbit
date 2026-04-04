import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class AuthDto {
  @IsEmail({}, { message: 'O e-mail informado não é válido.' })
  @IsNotEmpty({ message: 'O e-mail não pode estar vazio.' })
  email!: string;

  @IsString()
  @IsNotEmpty({ message: 'A senha não pode estar vazia.' })
  password!: string;
}