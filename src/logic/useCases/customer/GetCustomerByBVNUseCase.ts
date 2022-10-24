import {
  BaseCustomerResponse,
  ICustomerRepository,
} from "@data/customer/interfaces";
import { GetCustomerByBVNDTO } from "@logic/dtos/customer";

export class GetCustomerByBVNUseCase {
  constructor(
    private _customerRepo: ICustomerRepository,
    private getCustomerByBVNDTO: GetCustomerByBVNDTO
  ) {}

  async execute() {
    return (
      await this._customerRepo.findByBVN(this.getCustomerByBVNDTO.bvn)
    ).toObject();
  }
}
