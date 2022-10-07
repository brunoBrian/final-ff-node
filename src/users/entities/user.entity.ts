import { CommentEntity } from "src/comment/entities/comment.entity";

export class User {
  id: number;
  name: string;
  age: number;
  profession: string;
  city: string;
  comments: CommentEntity[];
}
