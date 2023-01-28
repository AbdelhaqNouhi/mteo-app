import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
    @Prop({ required: true })
    firstName: String;

    @Prop({ required: true })
    lastName: String;

    @Prop({ required: true })
    email: String;

    @Prop({ required: true })
    phone: Number;

    @Prop({ required: true })
    password: String;
}

export const UserSchema = SchemaFactory.createForClass(User)