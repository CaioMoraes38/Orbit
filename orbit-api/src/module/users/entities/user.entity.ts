import { Role, User } from 'src/generated/prisma/client'; 
import { Exclude } from 'class-transformer';

export class UserEntity implements User {
    id!: string;
    name!: string;
    email!: string;
    @Exclude() 
    password!: string;
    role!: Role;    
    createdAt!: Date;
    updatedAt!: Date;
    constructor(partial: Partial<UserEntity>) {
        Object.assign(this, partial);
    }
}