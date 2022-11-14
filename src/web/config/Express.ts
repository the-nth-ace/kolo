import express, { Express, Request, Response } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import helmet from "helmet";
import { useExpressServer, useContainer } from "routing-controllers";
import { Container } from "typedi";
import * as path from "path";
import { DbContext } from "@data-layer/DbContext";

import swaggerJsDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
const health = require("express-ping");

export class ExpressConfig {
  app: express.Express;
  dbContext: DbContext;
  controllersPath = path.resolve("src", "web/controllers");
  interceptorsPath = path.resolve("src", "web/interceptors");

  constructor() {
    this.dbContext = Container.get(DbContext);
    this.app = express();
    this.app.use(
      cors()
    );
    this.app.use(bodyParser.urlencoded({ extended: false }));
    this.app.use(bodyParser.json());
    this.app.use(health.ping());
    this.app.use(helmet());
    this.setUpSwagger();
    this.setUpControllers();
    this.app.use(this.clientErrorHandler);
    this.connectDB();
  }

  setUpControllers() {
    useContainer(Container);
    useExpressServer(this.app, {
      controllers: [this.controllersPath + "/*.ts"],
      interceptors: [this.interceptorsPath + "/*.ts"],
      cors: {
        origin: ["*"],
      },
    });
  }

  async connectDB() {
    await this.dbContext.connect();
  }

  setUpSwagger() {
    const options = {
      definition: {
        openapi: "3.0.0",
        info: {
          title: "Kolo REST API docs",
          version: "1.0.0",
        },
        components: {
          securitySchemas: {
            bearerAuth: {
              type: "http",
              scheme: "bearer",
              bearerFormat: "JWT",
            },
          },
        },
        security: [
          {
            bearerAuth: [],
          },
        ],
      },
      apis: ["./src/web/controllers/*.ts", "./src/logic/**/*.ts"],
    };

    const swaggerSpec = swaggerJsDoc(options);
    this.app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
    this.app.get("docs.json", (req: Request, res: Response) => {
      res.setHeader("Content-Type", "application/json");
      res.send(swaggerSpec);
    });
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
