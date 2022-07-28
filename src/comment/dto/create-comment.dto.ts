import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

import { CommentEntity } from '../entities/comment.entity';

export class CreateCommentDto extends CommentEntity {
  @ApiProperty({
    description: 'ID de um usuario existente',
    example: '12345',
  })
  @IsString()
  card_id: string;

  @ApiProperty({
    description: 'Comentário',
    example: 'Algum comentário',
  })
  @IsString()
  comment: string;
}
