import { Application } from "express"
import Controller from "contrib/interfaces/controller";
export default class {

    private controller: Controller;

    constructor(version: String, app: Application, controller: Controller) {
        this.controller = controller;
        
        app.route(`${version}/user`)
        .get(this.controller.findAll)
        .post(this.controller.create);

    }
}