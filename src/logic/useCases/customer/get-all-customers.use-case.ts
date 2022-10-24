import { ICustomerRepository } from "../../../data-layer/customer/interfaces/ICustomerRepository";
import { GenericSuccessResponse } from "../../reponses/GenericSuccessResponse";

export class GetAllCustomerUseCase {
  constructor(private _customerRepo: ICustomerRepository) {}
  async execute(): Promise<GenericSuccessResponse> {
    const data = await this._customerRepo.findAll();
    return data.map((el: any) => el.toObject());
  }
}
