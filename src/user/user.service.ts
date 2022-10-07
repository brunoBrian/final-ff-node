import { HttpService } from "@nestjs/axios";
import { Injectable } from "@nestjs/common";
import { EntityNotFoundError } from "src/utils/errors/EntityNotFoundError";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { UserEntity } from "./entities/user.entity";

@Injectable()
export class UserService {

    private users: UserEntity[] = [
        {
            id: 1,
            name: 'Rosana',          
        }
    ];

    constructor(private httpService: HttpService) {}

    async create(createUserDto: CreateUserDto) {
        try {
            
            const lastId = this.users[this.users.length - 1]?.id || 0;

            const newUser = {
                id: lastId + 1,
                ...createUserDto,
            };

            this.users.push(newUser);

            return newUser;

        } catch (err) {
            throw new EntityNotFoundError(`Erro ao criar usuário ${createUserDto.name}`)
        }
    }

    findAll(){
        return this.users;
    }

    findOne(id: number){
        const user = this.users.find((user) => user.id === id);
        
        if (user){
            return user;            
        }     
        throw new EntityNotFoundError(`Usuário ${id} não encontrado`);        
    }

    update(id: number, updateUserDto: UpdateUserDto) {
        const user = this.findOne(id);

        const index = this.users.indexOf(user);

        const newUser = {
            ...user,
            ...updateUserDto,
        }

        this.users[index] = newUser;

        return newUser;
    }

    remove(id: number) {
        const user = this.findOne(id);
        const index = this.users.indexOf(user);

        this.users.splice(index, 1);
    }

}