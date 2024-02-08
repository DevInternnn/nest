import { Module } from '@nestjs/common';
import { TaskModule } from './task/task.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://Admin_1234:admin@db.brs9ce0.mongodb.net/db?retryWrites=true&w=majority'), TaskModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
