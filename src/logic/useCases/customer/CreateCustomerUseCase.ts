import { ICustomerRepository } from "@data/customer/interfaces/ICustomerRepository";
import { CreateCustomerDTO } from "@logic/dtos/customer";

export class CreateCustomerUseCase {
  constructor(
    private _customerRepo: ICustomerRepository,
    private _createCustomerDTO: CreateCustomerDTO
  ) {}

  public execute() {
    return this._customerRepo.create(this._createCustomerDTO);
  }
}
