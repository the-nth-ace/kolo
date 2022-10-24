import { UserRole } from "../../data-layer/user/user.entity";
import { Response, Request, NextFunction } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import { GenericFailureResponse } from "@logic/reponses/GenericFailureResponse";
import { Container } from "typedi";
import { MongoUserRepository } from "../../data-layer/user/user.repository.mongo";
import { GetUserByIdUseCase } from "@logic/useCases/user";
import { IUser } from "../../data-layer/user/user.model";
import { DbContext } from "../../data-layer/DbContext";
import { IRole } from "../../data-layer/user/role.model";

export interface CustomRequest extends Request {
  token: string | JwtPayload;
}

export const AllowedRoles = (roles?: Array<UserRole>) => {
  const secret = process.env.SECRET;
  return async (req: Request, res: Response, next: NextFunction) => {
    if (!roles) {
      next();
    } else {
      try {
        const token = req.header("Authorization")?.replace("Bearer ", "");
        if (!token) {
          throw new Error();
        }

        const decoded: any = await jwt.verify(token, secret);

        (req as CustomRequest).token = decoded;

        const userId = decoded._id;
        const dbContext = Container.get(DbContext);

        const user: IUser | null = await dbContext.user.findById(userId).exec();

        const userRoles: any[] = [];

        if (user) {
          for (let role of user.roles) {
            let dbRole = await dbContext.role.findById(role._id).exec();
            userRoles.push(dbRole?.name);
          }
        }

        const allowedRoles = roles.map((role) => role.toString());

        if (!allowedRoles.some((role) => userRoles.includes(role)))
          throw new Error();

        next();
      } catch (err) {
        res.status(401).send({
          message: "No authorization",
        });
      }
    }
  };
};
