import Controller from "contrib/interfaces/controller"
import { Request, Response } from "express"
import { UserModel } from "models/mongo/user"

export default class implements Controller {

    public async findAll(req: Request, res: Response): Promise<Response> {
        const users = await UserModel.find();
        return res.send(users);
    }

    public async create(req: Request, res: Response): Promise<Response> {
        const user = new UserModel(req.body);
        await user.save();    
        return res.send(user);
    }
}