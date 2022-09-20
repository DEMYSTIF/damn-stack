import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type UserDoc = User & Document;

@Schema({ versionKey: false })
export class User {

    @Prop()
    name: string;

    @Prop()
    title: string;

    @Prop({ unique: true })
    email: string;

    @Prop({ unique: true })
    phone: number;

    
}

export const UserSchema = SchemaFactory.createForClass(User);