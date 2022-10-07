import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { UserEntity } from '../entities/user.entity';

export class CreateUserDto extends UserEntity {
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
