import { prop, Typegoose } from "typegoose"

export default class UserSchema extends Typegoose {

    @prop({required: true, unique: true, index: true}) document?: string;
    @prop({required: true}) name?: string;
    @prop({required: true}) email?: string;
    @prop({required: true}) password?: string;
    @prop({required: true}) roll?: string;
}

export const UserModel = new UserSchema().getModelForClass(UserSchema);