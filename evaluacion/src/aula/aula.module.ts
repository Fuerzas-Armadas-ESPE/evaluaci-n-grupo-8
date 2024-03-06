import { Module } from '@nestjs/common';
import { AulaService } from './aula.service';
import { AulaController } from './aula.controller';
import {MongooseModule}from'@nestjs/mongoose';
import {AulaSchema} from '../schemas/aula.schemas';

@Module({
  imports:[MongooseModule.forFeature([
    {name:'Aula',schema:AulaSchema}
])],
  providers: [AulaService],
  controllers: [AulaController]
})
export class AulaModule {}