import { DbContext } from "@data-layer/DbContext";
import { IUser } from "../user.model";

export interface IUserRepository {
  dbContext: DbContext;
  createUser(dto: Partial<IUser>): any;
  createUser(dto: any): any;
  findUserById(id: IUser["_id"]): any;
  findUserByEmail(email: IUser["email"]): any;
  updateUser(id: any, payload: Partial<IUser>): any;
  findAllUsers(): any;
  deleteCustomerUseCase(id: IUser["_id"]): any;
}
