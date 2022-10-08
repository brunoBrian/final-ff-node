import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";
import { UserEntity } from "../entities/user.entity";

export class CreateUserDto extends UserEntity {
    
    @ApiProperty({
        description: 'Nome do usuário',
        example: 'Rosana',
      }) 
    @IsString()
    name: string;
}