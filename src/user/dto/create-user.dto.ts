import { IsString, IsNotEmpty } from "class-validator";
import { UserEntity } from "../entities/user.entity";

export class CreateUserDto extends UserEntity {

    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsNotEmpty()
    description: string;

    @IsString()
    @IsNotEmpty()
    imageUrl: string;

    @IsString()
    @IsNotEmpty()
    strength: number;

    @IsString()
    @IsNotEmpty()
    speed: number;

    @IsString()
    @IsNotEmpty()
    skill: number;

    @IsString()
    @IsNotEmpty()
    gear: number;

    @IsString()
    @IsNotEmpty()
    intellect: number;
}
