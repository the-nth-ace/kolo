import { IGenericResponse } from "@data/common/interfaces";
import { Service } from "typedi";
import { BaseCustomerResponse } from "./interfaces";
import { ICustomerRepository } from "./interfaces/ICustomerRepository";
import { DbContext } from "../DbContext";
import { ICustomer } from "./customer.model";
import { CreateCustomerDTO } from "../../logic/dtos/customer/CreateCustomerDTO";

@Service()
export class MongoCustomerRepository implements ICustomerRepository {
  constructor(public dbContext: DbContext) {}

  async create(createCustomerDTO: CreateCustomerDTO): Promise<ICustomer> {
    return await this.dbContext.customer.create(createCustomerDTO);
  }
  update(updateCustomerDTO: any): IGenericResponse {
    throw new Error("Method not implemented.");
  }
  async delete(id: string): Promise<null> {
    return await this.dbContext.customer.findByIdAndDelete(id);
  }
  async findAll(): Promise<ICustomer[]> {
    return await this.dbContext.customer.find();
  }
  findById(id: string): any {
    return this.dbContext.customer.findById(id);
  }
  async findByBVN(bvn: string): Promise<any> {
    return await this.dbContext.customer.findOne({
      bvn: bvn,
    });
  }
  findCustomerAccounts(id: string): any {
    throw new Error("Method not implemented.");
  }
  customerFeedBack(feedbackDTO: any): any {
    throw new Error("Method not implemented.");
  }
}
