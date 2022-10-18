import { BaseCustomerResponse } from "@data/customer/interfaces";
import { ICustomerRepository } from "@data/customer/interfaces/ICustomerRepository";
import { GetCustomerByIdDTO } from "@logic/dtos/customer";

export class GetCustomerByIdUseCase {
  constructor(
    private _customerRepo: ICustomerRepository,
    private getCustomerByIdDTO: GetCustomerByIdDTO
  ) {}

  execute(): BaseCustomerResponse {
    return this._customerRepo.findById(this.getCustomerByIdDTO.id);
  }
}
