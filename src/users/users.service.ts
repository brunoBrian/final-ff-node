import { HttpService } from "@nestjs/axios";
import { Injectable } from "@nestjs/common";
import { CommentService } from "../comment/comment.service";
import { User } from "../users/entities/user.entity";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";

@Injectable()
export class UsersService {
  private users: User[] = [
    {
      id: 1,
      name: "suelly",
      age: 40,
      profession: "Developer",
      city: "Recife",
      comments: [],
    },
  ];

  private commentService = new CommentService(HttpService as any);

  create(createUserDto: CreateUserDto) {
    let lastId = 0;
    if (this.users.length > 0) {
      lastId = this.users[this.users.length - 1].id;
    }
    createUserDto.id = lastId + 1;
    this.users.push(createUserDto);
    return createUserDto;
  }

  findAll() {
    this.users.forEach((user) => {
      user.comments = this.commentService.findByUserId(user.id.toString());
    });

    return this.users;
  }

  findOne(id: number) {
    const user = this.users.find((item) => item.id === id);

    return user;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    const user = this.findOne(id);

    const index = this.users.indexOf(user);

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
