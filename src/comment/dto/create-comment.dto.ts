import { IsMongoId, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import mongoose from 'mongoose';

import { CommentEntity } from '../entities/comment.entity';

export class CreateCommentDto extends CommentEntity {
  @IsMongoId()
  user_id: mongoose.Schema.Types.ObjectId;

  @IsString()
  comment: string;
}
