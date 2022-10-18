import { EntityStatus } from "@data/common";
import { CustomerRepository } from "@data/customer";
import { DeleteCustomerDTO } from "@logic/dtos/customer";

export class DeleteCustomerUseCase {
  constructor(
    private _customerRepository: CustomerRepository,
    private deleteCustomerDTO: DeleteCustomerDTO
  ) {}

  public execute() {
    return this._customerRepository.update({
      ...this.deleteCustomerDTO,
      status: EntityStatus.INACTIVE,
    });
  }
}
