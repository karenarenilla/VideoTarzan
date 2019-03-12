import Controller from "contrib/interfaces/controller"
import { Request, Response } from "express"
import { MovieModel } from "models/mongo/movie"

export default class implements Controller {
    
    public async findOne(req: Request, res: Response): Promise<Response> {
        const movie = await MovieModel.findOne(req.body);
        return res.send(movie);
    }

    public async findAll(req: Request, res: Response): Promise<Response> {
        const movie = await MovieModel.find();
        return res.send(movie);
    }

    public async create(req: Request, res: Response): Promise<Response> {
        const movie = new MovieModel(req.body);
        await movie.save();    
        return res.send(movie);
    }

    public async update(req: Request, res: Response): Promise<Response> {
        const titulo = req.body.titulo;
        const movie = {
            sinopsis: req.body.sinopsis,
            actores: req.body.actores,
            director: req.body.director,
            inventario: req.body.inventario
        }
        await MovieModel.findOneAndUpdate(titulo, `${movie}`, {new: true});
        return res.send("update");
    }

    public async delete(req: Request, res: Response): Promise<Response> {
        
        await MovieModel.findByIdAndDelete(req.body) 
        return res.send("delete");
    }
}