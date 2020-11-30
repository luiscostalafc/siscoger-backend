import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UploadDocument = Upload & Document; 

@Schema()
export class Upload {
  @Prop()
  campo: string
  @Prop()
  sjd_ref: string
  @Prop()
  sjd_ref_ano: string
  @Prop()
  rg: string
  @Prop()
  id_proc: string
  @Prop()
  proc: string
  @Prop()
  obs: string
  @Prop()
  is_old_file: boolean

  @Prop()
  name: string
  @Prop()
  mime: string
  @Prop()
  path: string
  @Prop()
  size: string
}
export const UploadSchema = SchemaFactory.createForClass(Upload)