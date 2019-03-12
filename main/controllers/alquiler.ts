import  Controller  from "contrib/interfaces/controller"
import { Request, Response } from "express";
import { AlquilerModel } from "models/mongo/alquiler";

export default class implements Controller {

    public async findOne(req: Request, res: Response): Promise<Response> {
        const movie = await AlquilerModel.findOne(req.body);
        return res.send(movie);
    }

    public async findAll(req: Request, res: Response): Promise<Response> {
        const movies = await AlquilerModel.find();
        return res.send(movies);
    }

    public async create(req: Request, res: Response): Promise<Response> {
        const alquilerMovie = new AlquilerModel(req.body);
        await alquilerMovie.save();
        return res.send("save");
    }

    public async update(req: Request, res: Response): Promise<Response> {
        const cod = req.body.cod;
        const alquiler = {
            address: req.body.address
        }
        await AlquilerModel.findOneAndUpdate(cod, `${alquiler}`, {new: true})
        return res.send("update");
    }

    public async delete(req: Request, res: Response): Promise<Response> {
        await AlquilerModel.findOneAndDelete(req.body);
        return res.send("");
    }
}