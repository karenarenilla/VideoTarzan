import Controller from "contrib/interfaces/controller"
import { Request, Response } from "express"
import { UserModel } from "models/mongo/user"

export default class implements Controller {

    public async findOne(req: Request, res: Response): Promise<Response> {
        const user = await UserModel.findOne(req.body);
        return res.send(user);
    }

    public async findAll(req: Request, res: Response): Promise<Response> {
        const users = await UserModel.find();
        return res.send(users);
    }

    public async create(req: Request, res: Response): Promise<Response> {
        const user = new UserModel(req.body);
        await user.save();    
        return res.send(user);
    }

    public async update(req: Request, res: Response): Promise<Response> {
        const document = req.body.document;
        const user = {
            name: req.body.name,
            roll: req.body.roll
        }
        await UserModel.findOneAndUpdate(document, `${user}`, {new: true});
        return res.send("update");
    }

    public async delete(req: Request, res: Response): Promise<Response> {
        await UserModel.findByIdAndDelete(req.body) 
        return res.send("delete");
    }
}