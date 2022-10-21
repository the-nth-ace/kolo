import express, { Request, Response } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import helmet from "helmet";
import { useExpressServer, useContainer } from "routing-controllers";
import { Container } from "typedi";
import * as path from "path";
import { DbContext } from "@data/DbContext";
import { authMiddleware } from "@web/middlwares/auth.middleware";
import {
  ResponseInerceptor,
  ResponseMiddleWare,
} from "@web/middlwares/response.middleware";

const health = require("express-ping");

export class ExpressConfig {
  app: express.Express;
  dbContext: DbContext;
  constructor() {
    this.dbContext = Container.get(DbContext);
    this.app = express();
    this.app.use(cors());
    this.app.use(bodyParser.urlencoded({ extended: false }));
    this.app.use(bodyParser.json());
    this.app.use(health.ping());
    this.app.use(helmet());
    this.setUpControllers();
    this.app.use(this.clientErrorHandler);
    this.connectDB();
  }

  setUpControllers() {
    const controllersPath = path.resolve("src", "web/controllers");
    useContainer(Container);
    useExpressServer(this.app, {
      controllers: [controllersPath + "/*.ts"],
      middlewares: [ResponseMiddleWare],
      interceptors: [ResponseInerceptor],
      cors: true,
    });
  }

  async connectDB() {
    await this.dbContext.connect();
  }

  clientErrorHandler(
    err: any,
    req: Request,
    res: Response,
    next: Function
  ): void {
    if (err.hasOwnProperty("thrown")) {
      res.status(err["status"]).send({ error: err.message });
    }
  }
}
