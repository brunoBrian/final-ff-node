import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { EntityNotFoundError } from 'src/utils/errors/EntityNotFoundError';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserEntity } from './entities/user.entity';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class UserService {
  private users: UserEntity[] = [
    {
      id: 1,
      firstname: "Thamyres",
      lastname: "Magalhães",
      age: 30,
      graduation: "Computer science",
      city: "Rio de Janeiro",
    },
  ];
  static getById: any;

  constructor(private httpService: HttpService) {}

  create(createUserDto: CreateUserDto) {
    
        if(this.users.find((user) => user.firstname === createUserDto.firstname && user.lastname === createUserDto.lastname)){
            throw new EntityNotFoundError('Usuário já cadastrado');
        }
      
        const lastId = this.users[this.users.length - 1]?.id || 0;
  
        const newUser = {
          id: lastId + 1,
          ...createUserDto,
        };
  
        this.users.push(newUser);
  
        return newUser;
  }

  findAll() {
    return this.users;
  }

  findOne(id: number) {
    const user = this.users.find((user) => user.id === id);

    if (!user) {
      throw new EntityNotFoundError(`Usuário ${id} não encontrado`);
    }

    return user;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    const user = this.findOne(id);

    const index = this.users.indexOf(user);

    if(this.users.find((user) => user.firstname === updateUserDto.firstname && user.lastname === updateUserDto.lastname && user.id !== updateUserDto.id)){
        throw new EntityNotFoundError('Já existe outro usuário cadastrado com esse nome');
    }

    const newUser = {
      ...user,
      ...updateUserDto,
    };

    this.users[index] = newUser;

    return newUser;
  }

  remove(id: number) {
    const user = this.findOne(id);

    const index = this.users.indexOf(user);

    this.users.splice(index, 1);
  }
}
