import { PartialType } from "@nestjs/mapped-types";
import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";
import { CreateUserDto } from "./create-user.dto";

export class UpdateUserDto extends PartialType(CreateUserDto){
    
    @ApiProperty({
        description: 'Nome do usuário',
        example: 'Rosana',
      }) 
    @IsString()
    name:string;
}