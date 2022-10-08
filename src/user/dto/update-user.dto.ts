import { PartialType } from '@nestjs/mapped-types';
import { IsEmail, IsString } from 'class-validator';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {

    @IsEmail()
    email?: string;

    @IsString()
    username?: string;

    @IsString()
    password?: string;
}
