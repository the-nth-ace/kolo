import { IGenericResponse } from "@data/common/interfaces";
import { BaseCustomerResponse } from "./customer-response.interface";
import { DbContext } from "../../DbContext";

export interface ICustomerRepository {
  dbContext: DbContext;
  create(createCustomerDTO: any): any;
  update(id: any, updateCustomerDTO: any): any;
  delete(id: string): any;
  findAll(): any;
  findById(id: string): any;
  findByBVN(bvn: string): any;
  findCustomerAccounts(id: string): any;
  customerFeedBack(feedbackDTO: any): any;
}
