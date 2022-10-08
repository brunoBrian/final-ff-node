import { Inject, Injectable } from '@nestjs/common';
import { EntityNotFoundError } from 'src/utils/errors/EntityNotFoundError';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { IComment } from './comment.schema';
import mongoose, { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { UserService } from 'src/user/user.service';

@Injectable()
export class CommentService {
  constructor(
    @InjectModel('Comment')
    private commentModel: Model<IComment>,

    @Inject(UserService)
    private readonly userService: UserService,
    //private userModel: Model<IUser>,
  ) {}

  async create(createCommentDto: CreateCommentDto) {
    const newComment = new this.commentModel(createCommentDto);

    await this.userService.findOne(newComment.user_id);
      
    const savedComment = await newComment.save();

    return formatComment(savedComment);
  }

  async findAll() {
    try{
      const comments = await this.commentModel.find();

      if (!comments || comments.length<= 0) {
        throw new EntityNotFoundError(
          `Nenhum comentário encontrado`,
        );
      }

      return comments.map((comment: IComment) => formatComment(comment));

    }catch(err){
      throw new EntityNotFoundError(
        `Nenhum comentário encontrado`,
      );
    }

  }

  async findOne(id: mongoose.Schema.Types.ObjectId) {
    try {
      const comment = await this.commentModel.findById(id);

      if (!comment) {
        throw new EntityNotFoundError(`Comentário ${id} não encontrado`);
      }

      return formatComment(comment);
    } catch (err) {
      throw new EntityNotFoundError(`Comentário ${id} não encontrado`);
    }
  }

  async update(id: mongoose.Schema.Types.ObjectId, updateCommentDto: UpdateCommentDto) {
    await this.findOne(id);

    await this.commentModel.findOneAndUpdate({ _id: id }, updateCommentDto);

    const updatedComment = await this.findOne(id);

    return formatComment(updatedComment);
  }

  async remove(id: mongoose.Schema.Types.ObjectId) {
    await this.findOne(id);

    await this.commentModel.findByIdAndDelete(id);
  }

  async findByUserId(id: mongoose.Schema.Types.ObjectId) {
     try {
       const comments = await this.commentModel.find({ user_id: id });

       if (!comments || comments.length<= 0) {
         throw new EntityNotFoundError(
           `Nenhum comentário encontrado`,
         );
       }

       return comments.map((comment: IComment) => formatComment(comment));
     } catch (err) {
       throw new EntityNotFoundError(
         `Nenhum comentário encontrado`,
       );
    }
  }
}

const formatComment = (comment: IComment) => ({
  id: comment.id,
  comment: comment.comment,
  user_id: comment.user_id,
});