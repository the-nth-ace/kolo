import mongoose, { Model } from "mongoose";
import { Service } from "typedi";
import { HttpError, InternalServerError } from "routing-controllers";
import { IUser, UserSchema } from "@data-layer/user";
import { IRole, RoleSchema } from "@data-layer/user";
import { ITransaction, TransactionSchema } from "@data-layer/transaction";
import { ICustomer, CustomerSchema } from "@data-layer/customer";
import { AccountSchema, IAccount } from "@data-layer/account";

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

  public get account(): Model<IAccount> {
    return this._db.model<IAccount>("Account", AccountSchema);
  }

  public get transaction(): Model<ITransaction> {
    return this._db.model<ITransaction>("Transaction", TransactionSchema);
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

    this.user.estimatedDocumentCount(async (err: any, count: number) => {
      if (!err && count === 0) {
        const userRole = await this.role.findOne({ name: "user" }).exec();
        const staffRole = await this.role.findOne({ name: "staff" }).exec();
        const adminRole = await this.role.findOne({ name: "admin" }).exec();

        const userUser = new this.user({
          email: "user@kolo.bank",
          passwordHash: "123456789",
          firstName: "User",
          lastName: "Kolo",
        });
        userUser.roles.push(userRole?._id);
        await userUser.save();

        const staffUser = new this.user({
          email: "staff@kolo.bank",
          passwordHash: "123456789",
          firstName: "Staff",
          lastName: "Kolo",
        });
        staffUser.roles.push(staffRole?._id);
        await staffUser.save();

        const adminUser = new this.user({
          email: "admin@kolo.bank",
          passwordHash: "123456789",
          firstName: "Admin",
          lastName: "Kolo",
        });

        adminUser.roles = [adminRole?._id, staffRole?._id, userRole?._id];
        await adminUser.save();
      }
    });
  }
}
