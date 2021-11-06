import { CreateTaskDTO } from './dto/create-task.dto';
import { ITask } from './interfaces/task';
import { TasksService } from './tasks.service';
export declare class TasksController {
    private taskService;
    constructor(taskService: TasksService);
    getTasks(): ITask[];
    getTask(id: string): ITask;
    deleteTask(id: any): string;
    createTask(task: CreateTaskDTO): string;
    updateTask(task: CreateTaskDTO, id: any): string;
}
