import { prop, Typegoose, Ref } from "typegoose"
import UserSchema from "./user";
import MovieSchema from "./movie";

class AlquilerSchema extends Typegoose {

    @prop({index: true, unique: true, required: true }) codigo?: string;
    @prop({ ref: MovieSchema, required: true}) movie?: Ref<MovieSchema>;
    @prop({ ref: UserSchema, required: true }) user?: Ref<UserSchema>;
    @prop() date?: Date;
    @prop() address?: string;
}

export const AlquilerModel = new AlquilerSchema().getModelForClass(AlquilerSchema);