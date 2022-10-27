import { Container, Service } from "typedi";
import { ICustomerRepository } from "@data-layer/customer/interfaces";
import { DbContext } from "@data-layer/DbContext";
import { ICustomer } from "./customer.model";
import {
  CreateCustomerRequestDTO,
  UpdateCustomerRequestDTO,
} from "@logic/customer/requests";

import { InternalServerError, NotFoundError } from "routing-controllers";

@Service()
export class MongoCustomerRepository implements ICustomerRepository {
  dbContext: DbContext;
  constructor() {
    this.dbContext = Container.get(DbContext);
  }

  async create(
    createCustomerDTO: CreateCustomerRequestDTO
  ): Promise<ICustomer> {
    try {
      return await this.dbContext.customer.create(createCustomerDTO);
    } catch (e) {
      throw new InternalServerError(
        "Something went wrong while Creating Customer in the DB"
      );
    }
  }
  async update(
    id: string,
    updateCustomerDTO: UpdateCustomerRequestDTO
  ): Promise<ICustomer | null> {
    try {
      return await this.dbContext.customer
        .findByIdAndUpdate(id, updateCustomerDTO)
        .exec();
    } catch (err: any) {
      throw new InternalServerError(err.message);
    }
  }
  async delete(id: string): Promise<any> {
    return this.dbContext.customer.findByIdAndDelete(id).exec();
  }
  async findAll(): Promise<Array<ICustomer>> {
    const data = await this.dbContext.customer.find().exec();
    const resp: Array<any> = [];
    for (let d of data) {
      resp.push(d.toObject());
    }
    return resp;
  }
  async findById(id: string): Promise<ICustomer | null> {
    const customer = await this.dbContext.customer.findById(id).exec();
    if (customer) return customer?.toObject();
    throw new NotFoundError("Customer with this ID was not found");
  }
  async findByBVN(bvn: string): Promise<any> {
    return (
      await this.dbContext.customer
        .findOne({
          bvn: bvn,
        })
        .exec()
    )?.toObject();
  }
  findCustomerAccounts(id: string): any {
    throw new Error("Method not implemented.");
  }

  customerFeedBack(feedbackDTO: any): any {
    throw new Error("Method not implemented.");
  }

  createCustomerFeedback(feedbackDTO: any): any {}
}
