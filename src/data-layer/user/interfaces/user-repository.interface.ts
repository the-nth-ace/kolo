import { DbContext } from "../../DbContext";
import { IUser } from "../user.model";
import { CreateUserDTO } from "../../../logic/dtos/user/create-user.dto";

export interface IUserRepository {
  dbContext: DbContext;

  signupUser(dto: Partial<IUser>): any;
  createUser(dto: CreateUserDTO): any;
  findUserById(id: IUser["_id"]): any;
  findUserByEmail(email: IUser["email"]): any;
  updateUser(id: any, payload: Partial<IUser>): any;
  findAllUsers(): any;
  deleteCustomerUseCase(id: IUser["_id"]): any;
}
