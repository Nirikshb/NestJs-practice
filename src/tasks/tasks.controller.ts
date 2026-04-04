import { Controller, Get, Param, Query, Post, Body } from '@nestjs/common';

import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';

@Controller('task')
export class TasksController {
    constructor(private readonly tasksservice: TasksService) { }
    @Get()
    getAllTasks() {
        return this.tasksservice.getAllTasks();
    }


    @Post()
    createTask(
        @Body() taskData: CreateTaskDto) {
        return this.tasksservice.createTask(taskData);
    }



}
