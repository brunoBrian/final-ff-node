import { Module } from '@nestjs/common';
import { CommentModule } from './comment/comment.module';

@Module({
  imports: [CommentModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
