import { PartialType } from '@nestjs/mapped-types';
import { IsString } from 'class-validator';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  @IsString()
  firstname: string;

  @IsString()
  lastname: string;

  @IsString()
  age: number;

  @IsString()
  graduation: string;

  @IsString()
  city: string;
}
