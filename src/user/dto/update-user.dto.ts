import { PartialType } from '@nestjs/mapped-types';
import { IsNumber, IsString } from 'class-validator';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  @IsString()
  firstname: string;

  @IsString()
  lastname: string;

  @IsNumber()
  age: number;

  @IsString()
  graduation: string;

  @IsString()
  city: string;
}
