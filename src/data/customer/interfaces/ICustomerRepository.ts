import { IGenericResponse } from "@data/common/interfaces";
import { BaseCustomerResponse } from "./customer-response.interface";
import { DbContext } from "../../DbContext";

export interface ICustomerRepository {
  dbContext: DbContext;
  create(createCustomerDTO: any): IGenericResponse;
  update(updateCustomerDTO: any): IGenericResponse;
  delete(id: string): BaseCustomerResponse;
  findAll(): BaseCustomerResponse;
  findById(id: string): BaseCustomerResponse;
  findByBVN(bvn: string): BaseCustomerResponse;
  findCustomerAccounts(id: string): IGenericResponse;
  customerFeedBack(feedbackDTO: any): IGenericResponse;
}
