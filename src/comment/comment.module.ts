import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CommentService } from './comment.service';
import { CommentController } from './comment.controller';
import { UserModule } from 'src/user/user.module';
import { CommentSchema } from './comment.schema';

@Module({
  imports: [ MongooseModule.forFeature([
    {
      name: 'Comment',
      schema: CommentSchema,
    },
  ]),
    UserModule
  ],
  controllers: [CommentController],
  providers: [CommentService],
})
export class CommentModule {}
