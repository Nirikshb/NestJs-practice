import {
  Controller,
  Get,
  Param,
  Query,
  Post,
  Body,
  Delete,
  Put,
  Patch,
} from '@nestjs/common';

import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

@Controller('task')
export class TasksController {
  constructor(private readonly tasksservice: TasksService) { }
  @Get()
  getAllTasks() {
    return this.tasksservice.getAllTasks();
  }

  @Post()
  createTask(@Body() taskData: CreateTaskDto) {
    return this.tasksservice.createTask(taskData);
  }

  @Delete(':id')
  deleteTask(@Param('id') id: string) {
    return this.tasksservice.deleteTask(id);
  }

  @Put(':id')
  updateTask(@Param('id') id: string, @Body() taskData: UpdateTaskDto) {
    return this.tasksservice.updateProduct(id, taskData);
  }

  @Patch(':id')
  updatePatchProduct(@Param('id') id: string, @Body() taskData: UpdateTaskDto) {
    return this.tasksservice.updatePatchProduct(id, taskData);
  }
}
