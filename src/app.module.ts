import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CommentModule } from './comment/comment.module';

@Module({
  imports: [CommentModule, MongooseModule.forRoot('mongodb://localhost:27017')],
  controllers: [],
  providers: [],
})
export class AppModule {}
