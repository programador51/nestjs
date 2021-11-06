import { Controller , Delete, Get, Post, Put , Body, Param } from '@nestjs/common';
import { CreateTaskDTO } from './dto/create-task.dto';
import { ITask } from './interfaces/task';

import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
    
    constructor(private taskService:TasksService){

    }

    @Get()    
    getTasks():ITask[]{
        console.log(process.env.URL_API);
        return this.taskService.getTasks();
    }

    @Get(':id')
    getTask(@Param('id')id:string):ITask{
        return this.taskService.getTask(+id);
    }
    
    @Delete(':id')
    deleteTask(@Param('id')id):string{
        console.log(id);
        return `Task ${id} deleted`;
    }

    @Post()
    createTask(@Body()task:CreateTaskDTO):string{
        console.log(task.description);
        return 'Created task'
    }
    
    @Put(':id')
    updateTask(@Body()task:CreateTaskDTO,@Param('id')id):string{
        console.log(task,id);
        return 'Task updated'
    }


}
