import { IsOptional, IsString, IsInt, Min } from 'class-validator';
import { Type } from 'class-transformer';
import { ApiPropertyOptional } from '@nestjs/swagger'; 

export class FindAllUsersDto {
  
  @ApiPropertyOptional({ description: 'Número da página', default: 1 }) 
  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(1)
  page?: number;

  @ApiPropertyOptional({ description: 'Quantidade de itens por página', default: 10 }) 
  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(1)
  limit?: number;

  @ApiPropertyOptional({ description: 'Buscar por nome ou e-mail' }) 
  @IsOptional()
  @IsString()
  search?: string;
}