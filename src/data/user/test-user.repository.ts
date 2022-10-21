import { DbContext } from "@data/DbContext";
import { IUserRepository } from "./interfaces/user-repository.interface";
import { IUser } from "./user.model";

export class TestUserRepository implements IUserRepository {
  findUserByEmail(email: string) {
    throw new Error("Method not implemented.");
  }
  dbContext: DbContext;
  createUser(dto: Partial<IUser>): any {
    throw new Error("Method not implemented.");
  }
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
