import { IsNotEmpty, IsString } from 'class-validator';

import { UserEntityType } from './user-entity-type';

export class CreateUser extends UserEntityType {
  @IsString()
  id: number;

  @IsString()
  fullName: string;

  age: number;

  @IsString()
  city: string;
  
  phone: number;
  
  @IsString()
  address: string;
}
