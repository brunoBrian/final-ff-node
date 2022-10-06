import { IsNumber, IsString } from "class-validator";
import { User } from "../entities/user";

export class UpdateUser extends User {
    
    @IsNumber()
    id: number;

    @IsString()
    name: string;
    
    @IsNumber()
    age: number;

    @IsString()
    city: string;
}
