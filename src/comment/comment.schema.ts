import * as mongoose from 'mongoose';

export const CommentSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId, ref: 'User',
    required: true,
  },
  comment: {
    type: String,
    required: true,
  },
});

export interface IComment {
  id: mongoose.Schema.Types.ObjectId;
  user_id: mongoose.Schema.Types.ObjectId;
  comment: string;
}