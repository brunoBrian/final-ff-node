import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import mongoose from 'mongoose';
import { CommentService } from './comment.service';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';

@Controller('comment')
export class CommentController {
  // private commentService = new CommentService(HttpService as any);

  // Quando criar o construtor da classe, passa por debaixo dos panos o parametro commentService do tipo CommentService
  // parametro commentService é innjetado nessa classe
  constructor(private readonly commentService: CommentService) {}

  @Post()
  create(@Body() createCommentDto: CreateCommentDto) {
    return this.commentService.create(createCommentDto);
  }

  @Get()
  findAll() {
    return this.commentService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: mongoose.Schema.Types.ObjectId) {
    return this.commentService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: mongoose.Schema.Types.ObjectId, @Body() updateCommentDto: UpdateCommentDto) {
    return this.commentService.update(id, updateCommentDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param('id') id: mongoose.Schema.Types.ObjectId) {
    return this.commentService.remove(id);
  }

  @Get('user/:id')
  findByUserId(@Param('id') id: mongoose.Schema.Types.ObjectId) {
   return this.commentService.findByUserId(id);
  }
}
