import { IUseCase } from "@logic/lib/IUseCase";
import { ICustomer, ICustomerRepository } from "@data-layer/customer";
import { Document } from "mongoose";

export class FindAllCustomersUseCase implements IUseCase {
  constructor(private _customerRepo: ICustomerRepository) {}
  async execute(): Promise<Array<Document<ICustomer>>> {
    return await this._customerRepo.findAll();
  }
}
