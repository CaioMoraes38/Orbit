import {Category } from "src/generated/prisma/client"

export class CategoryEntity implements Category {
  id!:          string
  name!:        string  
  description!: string | null;  
  constructor(partial: Partial<CategoryEntity>) {
    Object.assign(this, partial);
}   
}
