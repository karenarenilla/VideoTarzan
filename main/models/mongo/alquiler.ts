import { prop, Typegoose } from "typegoose"
import { UserModel } from "./user";
import { MovieModel } from "./movie";

class AlquilerSchema extends Typegoose {

    @prop({ ref: MovieModel, required: true, index: true }) movie?: string;
    @prop({ ref: UserModel, required: true, index: true }) user?: string;
    @prop() date?: Date;
}

export const AlquilerModel = new AlquilerSchema().getModelForClass(AlquilerSchema);