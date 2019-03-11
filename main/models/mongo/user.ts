import { prop, Typegoose, index } from "typegoose"

class UserSchema extends Typegoose {

    @prop({required: true, unique: true, index: true}) document?: string;
    @prop() name?: string;
    @prop() roll?: string
}

export const UserModel = new UserSchema().getModelForClass(UserSchema);