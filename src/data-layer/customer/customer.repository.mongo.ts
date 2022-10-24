import { Service } from "typedi";
import { ICustomerRepository } from "@data-layer/customer/interfaces";
import { DbContext } from "@data-layer/DbContext";
import { ICustomer } from "./customer.model";
import { CreateCustomerRequestDTO } from "@logic/customer/request";
import { UpdateCustomerDTO } from "@logic/dtos/customer";
import { InternalServerError } from "routing-controllers";

@Service()
export class MongoCustomerRepository implements ICustomerRepository {
  constructor(public dbContext: DbContext) {}

  async create(
    createCustomerDTO: CreateCustomerRequestDTO
  ): Promise<ICustomer> {
    return await this.dbContext.customer.create(createCustomerDTO);
  }
  async update(
    id: string,
    updateCustomerDTO: UpdateCustomerDTO
  ): Promise<ICustomer | null> {
    try {
      return await this.dbContext.customer
        .findByIdAndUpdate(id, updateCustomerDTO)
        .exec();
    } catch (err: any) {
      throw new InternalServerError(err.message);
    }
  }
  async delete(id: string): Promise<null> {
    return this.dbContext.customer.findByIdAndDelete(id);
  }
  async findAll(): Promise<Array<ICustomer>> {
    return this.dbContext.customer.find();
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

  createCustomerFeedback(feedbackDTO: any): any {}
}
