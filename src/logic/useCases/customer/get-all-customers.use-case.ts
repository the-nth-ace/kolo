import { CustomerRepository } from "@data/customer";
import { BaseResponse } from "@logic/reponses/BaseResponse";
import { ICustomerRepository } from "../../../data/customer/interfaces/ICustomerRepository";
import { GenericSuccessResponse } from "../../reponses/GenericSuccessResponse";

export class GetAllCustomerUseCase {
  constructor(private _customerRepo: ICustomerRepository) {}
  async execute(): Promise<GenericSuccessResponse> {
    return await this._customerRepo.findAll();
  }
}
