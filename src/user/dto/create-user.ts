import { IsNumber, IsString } from "class-validator";
import { User } from "../entities/user";

export class CreateUser extends User{
    @IsString()
    name: string;

    @IsNumber()
    age: number;

    @IsString()
    city: string;
}
