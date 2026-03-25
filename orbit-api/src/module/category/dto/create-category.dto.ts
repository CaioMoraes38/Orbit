import {IsNotEmpty, IsString,  } from 'class-validator';
 

export class CreateCategoryDto {
    @IsString()
    @IsNotEmpty({message:'escolha a categoria'})
    name!:string

    @IsString()
    @IsNotEmpty({message:'escolha a categoria'})
    description!:string
}
