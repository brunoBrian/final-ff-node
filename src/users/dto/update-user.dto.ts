import { PartialType } from "@nestjs/mapped-types";
import { CreateUserDto } from "./create-user.dto";

import { IsNumber, IsString } from "class-validator";

export class UpdateUserDto extends PartialType(CreateUserDto) {
  @IsString()
  name: string;

  @IsNumber()
  age: number;

  @IsString()
  profession: string;

  @IsString()
  city: string;
}
