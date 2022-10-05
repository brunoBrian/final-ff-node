import { IsString } from "class-validator";
import { User } from "../entities/user.entity";

export class CreateUserDto extends User {
  @IsString()
  name: string;

  @IsString()
  age: number;

  @IsString()
  profession: string;

  @IsString()
  city: string;
}
