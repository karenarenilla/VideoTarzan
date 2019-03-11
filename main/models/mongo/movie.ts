import { prop, Typegoose } from "typegoose"

class MovieSchema extends Typegoose {

    @prop({required: true, unique: true, index: true}) titulo?: string;
    @prop() sinopsis?: string;
    @prop() actores?: string[];
    @prop() director?: string;
    @prop() inventario?: number;
}

export const MovieModel = new MovieSchema().getModelForClass(MovieSchema);