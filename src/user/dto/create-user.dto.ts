import { IsString, IsNumber } from "class-validator";
import { UserEntity } from "../entities/user.entity";

export class CreateUserDto extends UserEntity {

    @IsString()
    name: string;

    @IsString()
    description: string;

    @IsString()
    imageUrl: string;

    @IsNumber()
    strength: number;

    @IsNumber()
    speed: number;

    @IsNumber()
    skill: number;

    @IsNumber()
    gear: number;

    @IsNumber()
    intellect: number;
}
