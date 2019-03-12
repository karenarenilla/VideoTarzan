import { Request, Response } from "express";

export default interface Controller {

    findOne(req: Request, res: Response): Promise<Response>;
    findAll(req: Request, res: Response): Promise<Response>;
    create(req: Request, res: Response): Promise<Response>;
    update(req: Request, res: Response): Promise<Response>;
    delete(req: Request, res: Response): Promise<Response>;
}