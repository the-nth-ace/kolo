import { EntityStatus } from "../../../data-layer/common";
import { ICustomerRepository } from "../../../data-layer/customer/interfaces/ICustomerRepository";

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
