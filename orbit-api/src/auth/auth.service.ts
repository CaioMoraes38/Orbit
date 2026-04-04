import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../prisma/prisma.service'; // Ajuste o caminho se necessário
import { AuthDto } from './dtos/auth.dtos';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
  ) {}

  async login(authDto: AuthDto) {
    const { email, password } = authDto;

    const user = await this.prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      
      throw new UnauthorizedException('E-mail ou senha inválidos.');
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      throw new UnauthorizedException('E-mail ou senha inválidos.');
    }
    const payload = { 
      userId: user.id, 
      role: user.role 
    };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}