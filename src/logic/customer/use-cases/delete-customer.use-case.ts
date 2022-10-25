import { IUseCase } from "@logic/lib/IUseCase";
import { CustomerStatus, ICustomerRepository } from "@data-layer/customer";

export class DeleteCustomerUseCase implements IUseCase {
  constructor(private _customerRepo: ICustomerRepository, private id: string) {}
  async execute(): Promise<null> {
    const resp = this._customerRepo.update(this.id, {
      status: CustomerStatus.INACTIVE,
    });
    return null;
  }
}
