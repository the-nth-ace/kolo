import { EntityStatus } from "@data/common";
import { ICustomerRepository } from "@data/customer/interfaces/ICustomerRepository";

export class DeleteCustomerUseCase {
  constructor(
    private _customerRepository: ICustomerRepository,
    private id: string
  ) {}

  public execute() {
    return this._customerRepository.update(this.id, {
      status: EntityStatus.INACTIVE,
    });
  }
}
