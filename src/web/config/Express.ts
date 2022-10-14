import express, {Request, Response} from 'express'
import bodyParser from "body-parser";
import cors from 'cors'
import helmet from "helmet";
import { useExpressServer, useContainer } from 'routing-controllers';
import {Container} from "typedi";
import * as path from 'path';

const health = require('express-ping');

export class ExpressConfig{
    app: express.Express;
    constructor() {
        this.app = express();
        this.app.use(cors());
        this.app.use(bodyParser.urlencoded({ extended:false }));
        this.app.use(bodyParser.json());
        this.app.use(health.ping());
        this.app.use(helmet());
        this.app.use(this.clientErrorHandler)
        this.setUpControllers();
    }

    setUpControllers(){
        const controllersPath = path.resolve('src', 'web/controllers');
        useContainer(Container);
        useExpressServer(this.app,{
            controllers:[controllersPath+"/*.ts"],
            cors:true
        });
    }

    clientErrorHandler(err:any,req:Request,res:Response,next:Function):void{
        if(err.hasOwnProperty('thrown')){
            res.status(err["status"]).send({error:err.message});
        }
    }

}