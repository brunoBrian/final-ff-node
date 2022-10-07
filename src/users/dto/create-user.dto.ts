import { IsNumber, IsString } from "class-validator";
import { User } from "../entities/user.entity";

export class CreateUserDto extends User {
  @IsString()
  name: string;

  @IsNumber()
  age: number;

  @IsString()
  profession: string;

  @IsString()
  city: string;
}
