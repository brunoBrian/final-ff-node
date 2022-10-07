import { IsNotEmpty, IsString } from 'class-validator';

import { UserEntity } from './user.entity';

export class CreateUSer extends UserEntity {
  @IsString()
  id: number;

  @IsString()
  name: string;

  age: number;

  @IsString()
  country: string;
}
