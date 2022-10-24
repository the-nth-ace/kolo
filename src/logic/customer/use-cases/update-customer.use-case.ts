import { IUseCase } from "@logic/lib/IUseCase";
import { ICustomer, ICustomerRepository } from "@data-layer/customer";
import { Document } from "mongoose";

export class UpdateCustomerUseCase implements IUseCase {
  constructor(
    private _customerRepo: ICustomerRepository,
    private id: string,
    private updateCustomerRequestDTO: any
  ) {}
  async execute(): Promise<Document<ICustomer>> {
    return await this._customerRepo.update(
      this.id,
      this.updateCustomerRequestDTO
    );
  }
}
