import { DbContext } from "../DbContext";
import { CreateUserDTO } from "@logic/user/";
import { IUserRepository } from "@data-layer/user/interfaces";
import { IUser } from "./user.model";

export class TestUserRepository implements IUserRepository {
  createUser(dto: CreateUserDTO) {
    throw new Error("Method not implemented.");
  }
  findUserByEmail(email: string) {
    throw new Error("Method not implemented.");
  }
  dbContext: DbContext;

  findUserById(id: string) {
    throw new Error("Method not implemented.");
  }
  updateUser(id: any, payload: Partial<IUser>) {
    throw new Error("Method not implemented.");
  }
  findAllUsers() {
    throw new Error("Method not implemented.");
  }
  deleteCustomerUseCase(id: string) {
    throw new Error("Method not implemented.");
  }
}
