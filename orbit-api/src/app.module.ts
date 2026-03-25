import { Module } from '@nestjs/common';
import {UsersModule} from 'src/module/users/users.module'
import { CategoryModule } from './module/category/category.module';

@Module({
  imports: [UsersModule, CategoryModule],
})
export class AppModule {}
