import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { EntityNotFoundError } from 'src/utils/errors/EntityNotFoundError';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { CommentEntity } from './entities/comment.entity';
import { UserService } from 'src/user/user.service';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class CommentService {
  private comments: CommentEntity[] = [
    {
      id: 1,
      comment: 'Some comment',
      user_id: 1,
    },
  ];

  // só pode ser acessada pela classe
  constructor(private httpService: HttpService) {}

  async create(createCommentDto: CreateCommentDto) {
    try {
      await firstValueFrom(
        this.httpService.get(
          `http://localhost:8080/user/${createCommentDto.user_id}`,
        ),
      );

   /*   if(this.users.find((user) => user.id !== createCommentDto.id)){
        throw new EntityNotFoundError('Usuário não existe!');
    }*/
    
      const lastId = this.comments[this.comments.length - 1]?.id || 0;

      const newComment = {
        id: lastId + 1,
        ...createCommentDto,
      };

      this.comments.push(newComment);

      return newComment;
    } catch (err) {
      throw new EntityNotFoundError('Usuário não encontrado');
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

   findByUserId(id: number) {
     const comment = this.comments.filter((comment) => comment.user_id === id);

   if (!comment) {
       throw new EntityNotFoundError(`Usuário ${id} não encontrado`);
     }

     return comment;
   }
}
