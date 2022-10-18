import { CustomerRepository } from "@data/customer";
import { BaseResponse } from "@logic/reponses/BaseResponse";

export class GetAllCustomerUseCase {
  constructor(private _customerRepo: CustomerRepository) {}
  execute(): BaseResponse {
    return this._customerRepo.findAll();
  }
}
