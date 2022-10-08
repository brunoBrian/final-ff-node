import { Module } from '@nestjs/common';
import { CommentService } from './comment.service';
import { CommentController } from './comment.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { CommentSchema } from './comment.schema';

@Module({
  imports: [
    //Cria uma tabela no BD com o nome Comment e os valores do schema como colunas
    MongooseModule.forFeature([
      {
        name: 'Comment',
        schema: CommentSchema,
      },
    ])
  ],
  controllers: [CommentController],
  providers: [CommentService],
})
export class CommentModule {}
