import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { MongooseModule } from '@nestjs/mongoose';
import { AulaModule } from './aula/aula.module';
import { TareasModule } from './tareas/tarea.module';


@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://nando:nando@cluster0.wko5jxl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'), AulaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
