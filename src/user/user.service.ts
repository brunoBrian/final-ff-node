import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { EntityNotFoundError } from 'src/utils/errors/EntityNotFoundError';
import { CreateUser } from './dto/create-user';
import { UpdateUser } from './dto/update-user';
import { User } from './entities/user';

@Injectable()
export class UserService {
    private users: User[] = [
        { id:1, name: 'Laira', age: 28, city: 'São Paulo'},
        { id:2, name: 'Alexandre', age: 35, city: 'São Paulo'}

      ];
    
      constructor(private httpService: HttpService) {}
    
      async create(userDto: CreateUser) {
        let lastId = 0;
        if (this.users.length > 0) {
            lastId = this.users[this.users.length - 1].id;
        }

        userDto.id = lastId + 1;
        this.users.push(userDto);

        return userDto;
      }
    
      findAll() {
        return this.users;
      }
    
      getById(id: number) {
        const user = this.users.find((user) => user.id === id);
    
        if (!user) {
          throw new EntityNotFoundError(`Usuário ${id} não encontrado`);
        }
    
        return user;
      }
    
      update(id: number, userDto: UpdateUser) {
        const user = this.getById(id);
    
        const index = this.users.indexOf(user);
    
        const newUser = {
          ...user,
          ...userDto,
        };
    
        this.users[index] = newUser;
    
        return newUser;
      }
    
      remove(id: number) {
        const user = this.getById(id);
    
        const index = this.users.indexOf(user);
    
        this.users.splice(index, 1);
      }
    
}
