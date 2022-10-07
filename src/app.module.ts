import { Module } from '@nestjs/common';
import { CommentModule } from './comment/comment.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [CommentModule, UsersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
