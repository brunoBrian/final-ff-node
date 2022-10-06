import { Module } from '@nestjs/common';
import { CommentService } from './comment.service';
import { CommentController } from './comment.controller';
import { UserModule } from 'src/user/user.module';

@Module({
  imports: [
    UserModule
  ],
  controllers: [CommentController],
  providers: [CommentService],
})
export class CommentModule {}
