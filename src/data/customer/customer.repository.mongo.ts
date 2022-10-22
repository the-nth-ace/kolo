import { IGenericResponse } from "@data/common/interfaces";
import { Service } from "typedi";
import { BaseCustomerResponse } from "./interfaces";
import { ICustomerRepository } from "./interfaces/ICustomerRepository";
import { DbContext } from "../DbContext";

@Service()
export class MongoCustomerRepository implements ICustomerRepository {
  constructor(public dbContext: DbContext) {}

  create(createCustomerDTO: any): IGenericResponse {
    throw new Error("Method not implemented.");
  }
  update(updateCustomerDTO: any): IGenericResponse {
    throw new Error("Method not implemented.");
  }
  delete(id: string): BaseCustomerResponse {
    throw new Error("Method not implemented.");
  }
  findAll(): BaseCustomerResponse {
    throw new Error("Method not implemented.");
  }
  findById(id: string): BaseCustomerResponse {
    throw new Error("Method not implemented.");
  }
  findByBVN(bvn: string): BaseCustomerResponse {
    throw new Error("Method not implemented.");
  }
  findCustomerAccounts(id: string): IGenericResponse {
    throw new Error("Method not implemented.");
  }
  customerFeedBack(feedbackDTO: any): IGenericResponse {
    throw new Error("Method not implemented.");
  }
}
