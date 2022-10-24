import { ICustomerRepository } from "@data/customer/interfaces/ICustomerRepository";
import { CreateCustomerDTO } from "@logic/dtos/customer";

export class CreateCustomerUseCase {
  constructor(
    private _customerRepo: ICustomerRepository,
    private _createCustomerDTO: CreateCustomerDTO
  ) {}

  public async execute() {
    const data = await this._customerRepo.create(this._createCustomerDTO);
    return data.toObject();
  }
}
