import mongoose, { Model } from "mongoose";
import { Service } from "typedi";

import { IUser, UserSchema } from "./user/user.model";

@Service()
export class DbContext {
  private _db: typeof mongoose;

  public async connect(): Promise<void> {
    try {
      this._db = await mongoose.connect(process.env.DB_URI);
      console.log("MONGODB is eating good");
    } catch (err) {
      console.log(`Something went wrong with MONGODB CONN`, err);
    }
  }

  public get user(): Model<IUser> {
    return this._db.model<IUser>("User", UserSchema);
  }
}
