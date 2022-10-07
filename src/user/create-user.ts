import { IsNotEmpty, IsString } from 'class-validator';

import { UserEntity } from './user.entity';

export class CreateUSer extends UserEntity {
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
