import { IGenericResponse } from "@data/common/interfaces";
import {
  UpdateCustomerDTO,
  CreateCustomerDTO,
  CreateCustomerFeedBackDTO,
} from "@logic/dtos/customer";
import { BaseCustomerResponse } from "./customer-response.interface";

export interface ICustomerRepository {
  create(createCustomerDTO: CreateCustomerDTO): IGenericResponse;
  update(updateCustomerDTO: UpdateCustomerDTO): IGenericResponse;
  delete(id: string): BaseCustomerResponse;
  findById(id: string): BaseCustomerResponse;
  findByBVN(bvn: string): BaseCustomerResponse;
  findCustomerAccounts(id: string): IGenericResponse;
  customerFeedBack(feedbackDTO: CreateCustomerFeedBackDTO): IGenericResponse;
}
