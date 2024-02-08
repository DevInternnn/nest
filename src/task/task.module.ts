import { Module } from '@nestjs/common';
import { TaskController } from './task.controller';
import { TaskService } from './task.service';
import { MongooseModule } from '@nestjs/mongoose';
import { TaskSchema, TodoSchema } from './task.schema';

@Module({
  imports: [MongooseModule.forFeature([{
    name: TaskSchema.name,
    schema: TodoSchema
  }])],
  controllers: [TaskController],
  providers: [TaskService],
})
export class TaskModule {}
