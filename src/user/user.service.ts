import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { EntityNotFoundError } from "src/utils/errors/EntityNotFoundError";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { IUser } from "./user.schema";

@Injectable()
export class UserService {

    constructor(
        @InjectModel('User') 
        private userModel: Model<IUser>
    ) {}

    async create(createUserDto: CreateUserDto) {
        try {
            
            const newUser = new this.userModel(createUserDto);
            const savedUser = await newUser.save();

            return formatUser(savedUser);

        } catch (err) {
            throw new EntityNotFoundError(`Erro ao criar usuário ${createUserDto.name}`)
        }
    }

    async findAll(){
        const users = await this.userModel.find();
        return users.map((user: IUser) => formatUser(user));
    }

    async findOne(id: string){
        try {
            const user = await this.userModel.findById(id);
            
            if (user){
                return formatUser(user);            
            }     
            throw new EntityNotFoundError(`Usuário ${id} não encontrado`);

        } catch(err) {
            throw new EntityNotFoundError(`Usuário ${id} não encontrado`); 
        }  
    }

    async update(id: string, updateUserDto: UpdateUserDto) {
        await this.findOne(id);

        await this.userModel.findOneAndUpdate({ _id: id}, updateUserDto);

        const updatedUser = await this.findOne(id);

        return formatUser(updatedUser);
    }

    async remove(id: string) {
        await this.findOne(id);
        await this.userModel.findByIdAndDelete(id);
    }

}

const formatUser = (user: IUser) => ({
    id: user.id,
    name: user.name,
})