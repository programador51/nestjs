import { ITask } from './interfaces/task';
export declare class TasksService {
    tasks: ITask[];
    getTasks(): ITask[];
    getTask(id: number): ITask;
}
