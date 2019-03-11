import { Application } from "express";
import user from "./user";
import userController from "controllers/user"

export default class {
    private version: string;
    constructor(app: Application) {
      this.version = "/api/v1";
      new user(this.version, app, new userController());
    }
}