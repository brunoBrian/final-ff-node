import { IsNotEmpty, IsString } from 'class-validator';

import { CommentEntity } from '../entities/comment.entity';

export class CreateCommentDto extends CommentEntity {
  @IsString()
  user_id: number;

  @IsString()
  comment: string;
}
