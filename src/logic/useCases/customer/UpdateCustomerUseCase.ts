import { ICustomerRepository } from "@data/customer/interfaces/ICustomerRepository";
import { UpdateCustomerDTO } from "@logic/dtos/customer";

export class UpdateCustomerUseCase {
  constructor(
    private _customerRepository: ICustomerRepository,
    private updateCustomerDTO: UpdateCustomerDTO
  ) {}

  public execute() {
    return this._customerRepository.update(this.updateCustomerDTO);
  }
}
