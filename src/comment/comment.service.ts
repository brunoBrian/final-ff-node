import { Injectable } from '@nestjs/common';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { CommentEntity } from './entities/comment.entity';

@Injectable()
export class CommentService {
  private comments: CommentEntity[] = [
    {
      id: 1,
      comment: 'Some comment',
      user_id: '1',
    },
  ];

  create(createCommentDto: CreateCommentDto) {
    const lastId = this.comments[this.comments.length - 1].id;

    const newComment = {
      id: lastId + 1,
      ...createCommentDto,
    };

    this.comments.push(newComment);

    return newComment;
  }

  findAll() {
    return this.comments;
  }

  findOne(id: number) {
    const comment = this.comments.find((comment) => comment.id === id);

    if (!comment) {
      throw new Error(`Comentário ${id} não encontrado`);
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
    return `This action removes a #${id} comment`;
  }
}
