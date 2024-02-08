import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class TaskSchema extends Document {
  @Prop({ required: false })
  id: string;

  @Prop({ required: false })
  title?: string;

  @Prop({ default: false })
  description?:string
}

export const TodoSchema = SchemaFactory.createForClass(TaskSchema);
