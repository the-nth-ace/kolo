import { IUseCase } from "@logic/lib/IUseCase";
import { ICustomerRepository } from "@data-layer/customer";
import { CreateCustomerRequestDTO } from "@logic/customer";
import { InternalServerError } from "routing-controllers";

export class CreateCustomerUseCase implements IUseCase {
  constructor(
    private _customerRepo: ICustomerRepository,
    private _dto: CreateCustomerRequestDTO
  ) {}

  async execute(): Promise<any> {
    const user = await this._customerRepo.create(this._dto);
    if (user) return "Created customer successfully";
    throw new InternalServerError(
      "Something went wrong while creating the customer. Please try again"
    );
  }
}
