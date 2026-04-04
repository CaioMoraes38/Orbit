import { Controller, Get, Post, Body, Query,Req, UseInterceptors, Param,ClassSerializerInterceptor, UseGuards,Patch } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { FindAllUsersDto } from './dto/find-all-users.dto';
import { UserEntity } from './entities/user.entity';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
@UseInterceptors(ClassSerializerInterceptor) 
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    const user = await this.usersService.create(createUserDto);
    return new UserEntity(user);
  }

  @Get()
  async findAll(@Query() query: FindAllUsersDto) {
    const result = await this.usersService.findAll(query);
    return {
      ...result,
      data: result.data.map((user) => new UserEntity(user))
    };
  }

 @Patch(':id')
  async update(
    @Param('id') id: string, 
    @Body() updateUserDto: UpdateUserDto,
    @Req() req: any 
  ) {
    const userRole = req.user?.role || 'USER';
    const user = await this.usersService.update(id, updateUserDto, userRole);
    return new UserEntity(user);
  }

}

