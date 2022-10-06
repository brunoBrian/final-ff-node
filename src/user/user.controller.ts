import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
    HttpCode,
    HttpStatus,
  } from '@nestjs/common';
import { CreateUser } from './dto/create-user';
import { UpdateUser } from './dto/update-user';
import { User } from './entities/user';
import { UserService } from './user.service';

@Controller('user')
export class UserController {

    constructor(private readonly userService: UserService) {}

    @Post()
    create(@Body() userDto: CreateUser): Promise<CreateUser> {
      return this.userService.create(userDto);
    }
  
    @Get()
    async findAll() : Promise<User[]> {
      return this.userService.findAll();
    }
  
    @Get(':id')
    async getById(@Param('id') id: number) {
      return this.userService.getById(+id);
    }
  
    @Patch(':id')
    update(@Param('id') id: number, @Body() userDto: UpdateUser) {
      return this.userService.update(+id, userDto);
    }
  
    @Delete(':id')
    @HttpCode(HttpStatus.NO_CONTENT)
    remove(@Param('id') id: number) {
      return this.userService.remove(+id);
    }    




}
