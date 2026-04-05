import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

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

    updateProduct(id: string, taskData: UpdateTaskDto) {
        const taskIndex = this.tasks.findIndex(task => task.id === id);
        console.log(taskIndex, 'task');

        if (taskIndex !== -1) {
            this.tasks[taskIndex] = { id, ...taskData };
            return this.tasks[taskIndex];
        }
        return 'TaskNot Found not found';
    }
    updatePatchProduct(id: string, taskData: UpdateTaskDto) {
        const taskIndex = this.tasks.findIndex(task => task.id === id);
        console.log(taskIndex, 'task');

        if (taskIndex !== -1) {
            this.tasks[taskIndex] = { ...this.tasks[taskIndex], ...taskData };
            return this.tasks[taskIndex];
        }
        return 'TaskNot Found not found';
    }
}