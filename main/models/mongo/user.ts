import { prop, Typegoose } from "typegoose"

export default class UserSchema extends Typegoose {

    @prop({required: true, unique: true, index: true}) document?: string;
    @prop() name?: string;
    @prop() roll?: string;
}

export const UserModel = new UserSchema().getModelForClass(UserSchema);