import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { firstValueFrom } from 'rxjs';
import { EntityNotFoundError } from 'src/utils/errors/EntityNotFoundError';


@Injectable()
export class UserService {

  constructor(private httpService: HttpService) { }

  create(createUserDto: CreateUserDto) {
    return 'This action adds a new user';
  }

  findAll() {
    return `This action returns all user`;
  }

  async findOne(id: string) {
    try {
      await firstValueFrom(
        this.httpService.get(
          `https://api.github.com/users/${id}`,
        ),
      );
    } catch (err) {
      throw new EntityNotFoundError(`User #${id} não encontrado`);
    }
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
