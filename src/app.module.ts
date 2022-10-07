import { Module } from '@nestjs/common';
import { CommentModule } from './comment/comment.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [CommentModule,UserModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
