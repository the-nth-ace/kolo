import { DbContext } from "@data/DbContext";
import { Service } from "typedi";
import { IUserRepository } from "./interfaces/user-repository.interface";
import { IUser } from "./user.model";

@Service()
export class MongoUserRepository implements IUserRepository {
  constructor(public dbContext: DbContext) {}

  async findUserByEmail(email: string): Promise<IUser | null> {
    const user = await this.dbContext.user.findOne({
      email: email,
    });

    return user;
  }
  async createUser(dto: Partial<IUser>): Promise<any> {
    return await this.dbContext.user.create(dto);
  }
  async findUserById(id: IUser["_id"]) {
    return this.dbContext.user.findById(id);
  }
  async updateUser(id: IUser["_id"], payload: Partial<IUser>) {
    return await this.dbContext.user.findByIdAndUpdate(id, payload);
  }
  async findAllUsers() {
    return this.dbContext.user.find();
  }
  async deleteCustomerUseCase(id: string) {
    return await this.dbContext.user.findByIdAndDelete(id);
  }
}
