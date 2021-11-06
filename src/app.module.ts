import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TasksController } from './tasks/tasks.controller';
import { TasksService } from './tasks/tasks.service';
import { TasksModule } from './tasks/tasks.module';

import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [TasksModule , ConfigModule.forRoot()],
  controllers: [AppController, TasksController],
  providers: [AppService, TasksService],
})
export class AppModule {}
