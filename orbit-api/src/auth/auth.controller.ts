import { Controller, Post, Body, HttpCode, HttpStatus } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dtos/auth.dtos';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  @HttpCode(HttpStatus.OK) // Truque Sênior: Muda o status de 201 (Created) para 200 (OK)
  login(@Body() authDto: AuthDto) {
    return this.authService.login(authDto);
  }
}