import * as mongoose from 'mongoose';

export const CommentSchema = new mongoose.Schema({
  card_id: {
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
  card_id: string;
  comment: string;
}
