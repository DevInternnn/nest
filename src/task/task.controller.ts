import { Controller, Get, Post,Body} from '@nestjs/common';
import { get } from 'http';
import { TaskService } from './task.service';
import { CreateTodoDto } from './task.dto';

@Controller('task')
export class TaskController {
    constructor(private readonly taskService: TaskService) {}
    @Get()
    sayGreet():string{
        return "hi"
    }
    @Post('/greet')
    async create(@Body() payLoad: CreateTodoDto): Promise<CreateTodoDto> {
      return this.taskService.create(payLoad);
    }
}