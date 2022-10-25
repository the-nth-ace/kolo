import { IUseCase } from "@logic/lib/IUseCase";
import { ICustomerRepository } from "@data-layer/customer";
import { ICustomer } from "@data-layer/customer/customer.model";
import { Document } from "mongoose";

export class FindCustomerByBvnUseCase implements IUseCase {
  constructor(
    private _customerRepo: ICustomerRepository,
    private bvn: string
  ) {}
  async execute(): Promise<ICustomer | null> {
    return await this._customerRepo.findByBVN(this.bvn);
  }
}
