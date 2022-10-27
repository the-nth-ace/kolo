import { DbContext } from "../DbContext";
import { CreateUserDTO } from "@logic/user/";
import { Container, Service } from "typedi";
import { IUserRepository } from "@data-layer/user/interfaces";
import { IUser } from "./user.model";

@Service()
export class MongoUserRepository implements IUserRepository {
  dbContext: DbContext;
  constructor() {
    this.dbContext = Container.get(DbContext);
  }

  async findUserByEmail(email: string): Promise<IUser | null> {
    return this.dbContext.user.findOne({
      email: email,
    });
  }
  async createUser(dto: CreateUserDTO): Promise<any> {
    return await this.dbContext.user.create(dto);
  }

  async findUserById(id: IUser["_id"]) {
    return this.dbContext.user.findById(id);
  }
  async updateUser(id: IUser["_id"], payload: Partial<IUser>) {
    return await this.dbContext.user.findByIdAndUpdate(id, payload).exec();
  }
  async findAllUsers() {
    return this.dbContext.user.find();
  }
  async deleteCustomerUseCase(id: string) {
    return this.dbContext.user.findByIdAndDelete(id);
  }
}
