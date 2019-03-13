import { Application } from "express";
import user from "./user";
import userController from "controllers/user"
import movie from "./movie"
import movieController from "controllers/movie"
import alquiler from "./alquiler";
import alquilerController from "controllers/alquiler"

export default class {
    private version: string;
    constructor(app: Application) {
      this.version = "/api/v1";
      new user(this.version, app, new userController());
      new movie(this.version, app, new movieController());
      new alquiler(this.version, app, new alquilerController());

    }
}