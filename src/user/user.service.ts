import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose, { Model } from 'mongoose';
import { EntityAlreadyExistsError } from 'src/utils/errors/EntityAlreadyExistsError';
import { EntityNotFoundError } from 'src/utils/errors/EntityNotFoundError';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { IUser } from './user.schema';

@Injectable()
export class UserService {

  constructor(
    @InjectModel('User')
    private userModel: Model<IUser>,
  ) {}
  async create(createUserDto: CreateUserDto) {

    const newUser = new this.userModel(createUserDto);

    await this.checkUniqueUser({email: createUserDto.email, username: createUserDto.username})

    const savedUser = await newUser.save();

    return formatUser(savedUser)

  }

  async findAll() {
    try{
      const users = await this.userModel.find();

      if (!users || users.length<= 0) {
        throw new EntityNotFoundError(
          `Nenhum usuário encontrado`,
        );
      }

      return users.map((user: IUser) => formatUser(user));

    }catch(err){
      throw new EntityNotFoundError(
        `Nenhum usuário encontrado`,
      );
    }

  }

  async findOne(id: mongoose.Schema.Types.ObjectId) {
    try {
      const user = await this.userModel.findById(id);

      if (!user) {
        throw new EntityNotFoundError(`Usuário ${id} não encontrado`);
      }

      return formatUser(user);
    } catch (err) {
      throw new EntityNotFoundError(`Usuário ${id} não encontrado`);
    }
  }

  async update(id: mongoose.Schema.Types.ObjectId, updateUserDto: UpdateUserDto) {
    await this.findOne(id);

    await this.checkUniqueUser({email: updateUserDto.email, username: updateUserDto.username})

    await this.userModel.findOneAndUpdate({ _id: id }, updateUserDto);

    const updatedComment = await this.findOne(id);

    return updatedComment;
  }

  async remove(id: mongoose.Schema.Types.ObjectId) {
    await this.findOne(id);

    await this.userModel.findByIdAndDelete(id);
  }

  async checkUniqueUser({email, username} : {email?: string, username?:string}) {
    let message : string;
    try{

      const usernameUser = username ? await this.userModel.find({username: username}) : [];

      const emailUser = email ? await this.userModel.find({email: email}) : [];

      if(usernameUser.length > 0 || emailUser.length > 0){
        if(!usernameUser || usernameUser.length <= 0) message = 'Email já está em uso';
        else if(!emailUser || emailUser.length <= 0) message = 'Username já está em uso';
        else message = 'Email e Username já estão em uso';

        throw new EntityAlreadyExistsError(message);
      }

      return 'ok'

    }catch(err){

      throw new EntityAlreadyExistsError(message);

    }

  }
}

const formatUser = (user: IUser) => ({
  id: user.id,
  username: user.username,
  email: user.email
});
