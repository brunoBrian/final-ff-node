import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CommentModule } from './comment/comment.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [CommentModule, UserModule, MongooseModule.forRoot('mongodb://localhost:27017')],  
  controllers: [],
  providers: [],
})
export class AppModule {}
