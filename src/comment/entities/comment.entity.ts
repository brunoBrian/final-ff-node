import mongoose from "mongoose";

export class CommentEntity {
  id: mongoose.Schema.Types.ObjectId;
  user_id: mongoose.Schema.Types.ObjectId;
  comment: string;
}
