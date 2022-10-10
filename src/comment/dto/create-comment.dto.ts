import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';
import { CommentEntity } from '../entities/comment.entity';

export class CreateCommentDto extends CommentEntity {
  @ApiProperty({
    description: 'ID de um usuário existente',
    example: '633f916a2f0d590ddd145c2c',
  })
  @IsString()
  user_id: string;

  @ApiProperty({
    description: 'Comentário',
    example: 'Algum comentário',
  }) 
  @IsString()
  comment: string;
}
