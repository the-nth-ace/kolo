import { DbContext } from "@data-layer/DbContext";
import { ICustomer } from "@data-layer/customer/customer.model";
import { CreateCustomerRequestDTO } from "@logic/customer";
import { Document } from "mongoose";

export interface ICustomerRepository {
  dbContext: DbContext;
  create(createCustomerDTO: CreateCustomerRequestDTO): any;
  update(id: any, updateCustomerDTO: any): any;
  delete(id: string): any;
  findAll(): any;
  findById(id: string): any;
  findByBVN(bvn: string): any;
  findCustomerAccounts(id: string): any;
  createCustomerFeedback(feedbackDTO: any): any;
}
