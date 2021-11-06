import { Injectable } from '@nestjs/common';

import { ITask } from './interfaces/task';

@Injectable()
export class TasksService {
    tasks:ITask[] = [
        {
            id:123,
            title:'Create a SPA',
            description:'Use react angular or vue',
            isDone:false
        },
        {
            id:124,
            title:'Create a SPA',
            description:'Use react angular or vue',
            isDone:false
        },
        {
            id:125,
            title:'Create a SPA',
            description:'Use react angular or vue',
            isDone:false
        }
    ]

    getTasks():ITask[]{
        return this.tasks;
    }

    getTask(id:number):ITask{
        return this.tasks.find(task=>task.id===id)
    }
}
