import { PartialType } from "@nestjs/mapped-types";
import { CreateUserDto } from "./create-user.dto";

import { IsString } from "class-validator";

export class UpdateUserDto extends PartialType(CreateUserDto) {
  @IsString()
  name: string;

  @IsString()
  age: number;

  @IsString()
  profession: string;

  @IsString()
  city: string;
}
