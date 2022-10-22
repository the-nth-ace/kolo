import { IGenericResponse } from "@data/common/interfaces";
import { DbContext } from "@data/DbContext";
import {
  CreateCustomerDTO,
  UpdateCustomerDTO,
  CreateCustomerFeedBackDTO,
} from "@logic/dtos/customer";
import { BaseCustomerResponse } from "./interfaces";
import { ICustomerRepository } from "./interfaces/ICustomerRepository";

export class CustomerRepository implements ICustomerRepository {
  dbContext: DbContext;
  findAll(): BaseCustomerResponse {
    throw new Error("Method not implemented.");
  }
  create(createCustomerDTO: CreateCustomerDTO): IGenericResponse {
    throw new Error("Method not implemented.");
  }
  update(updateCustomerDTO: UpdateCustomerDTO): IGenericResponse {
    throw new Error("Method not implemented.");
  }
  delete(id: string): IGenericResponse {
    throw new Error("Method not implemented.");
  }
  findById(id: string): IGenericResponse {
    throw new Error("Method not implemented.");
  }
  findByBVN(bvn: string): IGenericResponse {
    throw new Error("Method not implemented.");
  }
  findCustomerAccounts(id: string): IGenericResponse {
    throw new Error("Method not implemented.");
  }
  customerFeedBack(feedbackDTO: CreateCustomerFeedBackDTO): IGenericResponse {
    throw new Error("Method not implemented.");
  }
}
