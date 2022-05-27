import * as mongoose from 'mongoose';

export const CommentSchema = new mongoose.Schema({
  user_id: {
    type: String,
    required: true,
  },
  comment: {
    type: String,
    required: true,
  },
});

export interface IComment {
  id: string;
  user_id: string;
  comment: string;
}
