import { IsNotEmpty, IsString, IsNumber } from 'class-validator';

import { CommentEntity } from '../entities/comment.entity';

export class CreateCommentDto extends CommentEntity {
  @IsNumber()
  user_id: number;

  @IsString()
  comment: string;
}
