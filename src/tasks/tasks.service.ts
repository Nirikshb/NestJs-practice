import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
@Injectable()
export class TasksService {
    private tasks: any[] = [];

    getAllTasks() {
        return this.tasks;
    }

    createTask(taskData: CreateTaskDto) {
        const littleTasks = { id: Date.now().toString(), ...taskData }

        this.tasks.push(littleTasks);
        return littleTasks;
    }

    deleteTask(id: string) {
        this.tasks = this.tasks.filter(task => task.id !== id)
        return `task with id ${id} gonzo`
    }

}
