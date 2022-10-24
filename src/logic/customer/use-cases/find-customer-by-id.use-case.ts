import { IUseCase } from "@logic/lib/IUseCase";
import { ICustomer, ICustomerRepository } from "@data-layer/customer";
import { Document } from "mongoose";

export class FindCustomerByIdUseCase implements IUseCase {
  constructor(private _customerRepo: ICustomerRepository, private id: string) {}
  async execute(): Promise<Document<ICustomer>> {
    return await this._customerRepo.findById(this.id);
  }
}
