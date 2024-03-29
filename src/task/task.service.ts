import { Injectable } from '@nestjs/common';
import { CreateTodoDto } from './task.dto';
import { InjectModel } from '@nestjs/mongoose';
import { TaskSchema } from './task.schema';
import { Model } from 'mongoose';

@Injectable()
export class TaskService {
  constructor(
    @InjectModel(TaskSchema.name) private readonly taskModel: Model<TaskSchema>,
  ) {}
  async create(payload: CreateTodoDto): Promise<CreateTodoDto> {
    return this.taskModel.create(payload);
  }
  async getData(payload: CreateTodoDto): Promise<CreateTodoDto[]> {
    return this.taskModel.find(payload).exec();
  }
}
