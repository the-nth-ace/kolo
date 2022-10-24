import { ICustomerRepository } from "../../../data-layer/customer/interfaces/ICustomerRepository";
import { UpdateCustomerDTO } from "@logic/dtos/customer";
import { BadRequestError } from "routing-controllers";

export class UpdateCustomerUseCase {
  constructor(
    private _customerRepository: ICustomerRepository,
    private id: string,
    private updateCustomerDTO: UpdateCustomerDTO
  ) {}

  public async execute() {
    const resp = await this._customerRepository.update(
      this.id,
      this.updateCustomerDTO
    );
    if (resp) return;
    throw new BadRequestError("Something went wrong");
  }
}
