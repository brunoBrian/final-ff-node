import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { EntityNotFoundError } from 'src/utils/errors/EntityNotFoundError';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { CommentEntity } from './entities/comment.entity';
import { firstValueFrom } from 'rxjs';
import { UserEntity } from 'src/user/user.entity';
import { CreateUSer } from 'src/user/create-user';

@Injectable()
export class CommentService {
  private comments: CommentEntity[] = [
    {
      id: 1,
      comment: 'Some comment',
      user_id: 1,
    },
  ];

  private users: UserEntity[] = [
    {
      id: 1,
      name: 'Joe',
      age: 25,
      country: 'Canadá'
    }
  ]

  // só pode ser acessada pela classe
  constructor(private httpService: HttpService) {}

  async create(createCommentDto: CreateCommentDto) {
    try {
      await firstValueFrom(
        this.httpService.get(
          `https://api.github.com/users/${createCommentDto.user_id}`,
        ),
      );

      const lastId = this.comments[this.comments.length - 1]?.id || 0;

      const newComment = {
        id: lastId + 1,
        ...createCommentDto,
      };

      this.comments.push(newComment);

      return newComment;
    } catch (err) {
      throw new EntityNotFoundError('Card não encontrado');
    }
  }

  async createUSer(createUser: CreateUSer){
    try {
      await firstValueFrom(
        this.httpService.get(
          `https://api.github.com/users/${createUser.id}`,
        ),
      );

      const lastId = this.users[this.users.length - 1]?.id || 0;

      const newUser = {
        id: lastId + 1,
        ...createUser,
      };

      this.users.push(newUser);

      return newUser;
    } catch (err) {
      throw new EntityNotFoundError('User não cadastrado');
    }
  }

  findAll() {
    return this.comments;
  }

  findOne(id: number) {
    const comment = this.comments.find((comment) => comment.id === id);

    if (!comment) {
      throw new EntityNotFoundError(`Comentário ${id} não encontrado`);
    }

    return comment;
  }

  update(id: number, updateCommentDto: UpdateCommentDto) {
    const comment = this.findOne(id);

    const index = this.comments.indexOf(comment);

    const newComment = {
      ...comment,
      ...updateCommentDto,
    };

    this.comments[index] = newComment;

    return newComment;
  }

  remove(id: number) {
    const comment = this.findOne(id);

    const index = this.comments.indexOf(comment);

    this.comments.splice(index, 1);
  }

  findCommentsByUserId(id: number) {
    const user = this.users.find((user) => user.id === id)
    if(user){
      const comment = this.comments.filter((comment) => comment.user_id === user.id);
      if (!comment) {
        throw new EntityNotFoundError(`Comentários não encontrados para o id ${id}`);
      }
      return comment;
    }
    else{
      throw new EntityNotFoundError(`Usuário ${id} não encontrado`);
    }
   }
}
