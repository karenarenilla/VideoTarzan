import { Mongoose, connect }  from "mongoose"

export default class MongoConnection {
    private static instance: Mongoose;

    public static async getInstance(): Promise<Mongoose> {
        return this.instance || (this.instance = await connect("mongodb://mongo:27017/videoTarzan", { useNewUrlParser: true })); 
    }
}