import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Task } from './task.entity';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

@Injectable()
export class TasksService {
    constructor(
        @InjectRepository(Task)
        private readonly taskRepository: Repository<Task>,
    ) { }

    async createTask(taskData: CreateTaskDto) {
        return await this.taskRepository.save(taskData);
    }

    async getAllTasks() {
        return await this.taskRepository.find();
    }

    async deleteTask(id: string) {
        return this.taskRepository.delete(id);
    }

    async updateProduct(id: string, taskData: UpdateTaskDto) {
        await this.taskRepository.update(id, taskData);
        const updatedTask = await this.taskRepository.findOneBy({ id });
        if (updatedTask) {
            return updatedTask;
        } else {
            return 'No Task To Update';
        }

    }

    async updatePatchProduct(id: string, taskData: UpdateTaskDto) {

    }
    // async updateProduct(id: string, taskData: UpdateTaskDto) {
    //     // await this.taskRepository.update(id, taskData);
    //     // return await this.taskRepository.findOneBy({ id });
    // }

    // BELOW LIES HOW HARDOCDED STUFF WORKS ABOVE FOR SQLITE
    // private tasks: any[] = [];
    // getAllTasks() {
    //     return this.tasks;
    // }

    // createTask(taskData: CreateTaskDto) {
    //     const littleTasks = { id: Date.now().toString(), ...taskData }

    //     this.tasks.push(littleTasks);
    //     return littleTasks;
    // }

    // deleteTask(id: string) {
    //     this.tasks = this.tasks.filter(task => task.id !== id)
    //     return `task with id ${id} gonzo`
    // }

    // updateProduct(id: string, taskData: UpdateTaskDto) {
    //     const taskIndex = this.tasks.findIndex(task => task.id === id);
    //     console.log(taskIndex, 'task');

    //     if (taskIndex !== -1) {
    //         this.tasks[taskIndex] = { id, ...taskData };
    //         return this.tasks[taskIndex];
    //     }
    //     return 'TaskNot Found not found';
    // }
    // updatePatchProduct(id: string, taskData: UpdateTaskDto) {
    //     const taskIndex = this.tasks.findIndex(task => task.id === id);
    //     console.log(taskIndex, 'task');

    //     if (taskIndex !== -1) {
    //         this.tasks[taskIndex] = { ...this.tasks[taskIndex], ...taskData };
    //         return this.tasks[taskIndex];
    //     }
    //     return 'TaskNot Found not found';
    // }
}
