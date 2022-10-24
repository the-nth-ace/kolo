import { IGenericResponse } from "@data/common/interfaces";
import { Service } from "typedi";
import { BaseCustomerResponse } from "./interfaces";
import { ICustomerRepository } from "./interfaces/ICustomerRepository";
import { DbContext } from "../DbContext";
import { ICustomer } from "./customer.model";
import { CreateCustomerDTO } from "../../logic/dtos/customer/CreateCustomerDTO";
import { UpdateCustomerDTO } from "../../logic/dtos/customer/UpdateCustomerDto";

@Service()
export class MongoCustomerRepository implements ICustomerRepository {
  constructor(public dbContext: DbContext) {}

  async create(createCustomerDTO: CreateCustomerDTO): Promise<ICustomer> {
    return await this.dbContext.customer.create(createCustomerDTO);
  }
  async update(
    id: string,
    updateCustomerDTO: UpdateCustomerDTO
  ): Promise<boolean> {
    try {
      await this.dbContext.customer
        .findByIdAndUpdate(id, updateCustomerDTO)
        .exec();
      return true;
    } catch (err: any) {
      console.log(err);
      return false;
    }
  }
  async delete(id: string): Promise<null> {
    return await this.dbContext.customer.findByIdAndDelete(id);
  }
  async findAll(): Promise<ICustomer[]> {
    return await this.dbContext.customer.find();
  }
  async findById(id: string): Promise<ICustomer | null> {
    return await this.dbContext.customer.findById(id).exec();
  }
  async findByBVN(bvn: string): Promise<any> {
    return await this.dbContext.customer
      .findOne({
        bvn: bvn,
      })
      .exec();
  }
  findCustomerAccounts(id: string): any {
    throw new Error("Method not implemented.");
  }
  customerFeedBack(feedbackDTO: any): any {
    throw new Error("Method not implemented.");
  }
}
