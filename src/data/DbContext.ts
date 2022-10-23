import mongoose, { Model } from "mongoose";
import { Service } from "typedi";

import { IUser, UserSchema } from "./user/user.model";
import { IRole, RoleSchema } from "./user/role.model";
import { HttpError, InternalServerError } from "routing-controllers";
import { ICustomer, CustomerSchema } from "./customer/customer.model";

@Service()
export class DbContext {
  private _db: typeof mongoose;

  public async connect(): Promise<void> {
    try {
      this._db = await mongoose.connect(process.env.DB_URI);
      console.log("MONGODB is eating good");
      await this.initial();
    } catch (err) {
      console.log(`Something went wrong with MONGODB CONN`, err);
    }
  }

  public get user(): Model<IUser> {
    return this._db.model<IUser>("User", UserSchema);
  }

  public get role(): Model<IRole> {
    return this._db.model<IRole>("Role", RoleSchema);
  }

  public get customer(): Model<ICustomer> {
    return this._db.model<ICustomer>("Customer", CustomerSchema);
  }

  async initial() {
    this.role.estimatedDocumentCount((err: any, count: any) => {
      if (!err && count === 0) {
        new this.role({
          name: "user",
        }).save((err) => {
          if (err) {
            console.log("error", err);
            throw new InternalServerError("Inter Error");
          }
          console.log("added 'user' to roles collection");
        });
        new this.role({
          name: "staff",
        }).save((err) => {
          if (err) {
            console.log("error", err);
            throw new InternalServerError("Inter Error");
          }
          console.log("added 'staff' to roles collection");
        });
        new this.role({
          name: "admin",
        }).save((err) => {
          if (err) {
            console.log("error", err);
            throw new InternalServerError("Inter Error");
          }
          console.log("added 'admin' to roles collection");
        });
      }
    });
  }
}
