import { Request, Response } from "express";

export default interface Controller {

    findAll(req: Request, res: Response): Promise<Response>;
    create(req: Request, res: Response): Promise<Response>;
}