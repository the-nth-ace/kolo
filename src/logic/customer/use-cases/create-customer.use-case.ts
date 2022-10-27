import { IUseCase } from "@logic/lib/IUseCase";
import { ICustomerRepository } from "@data-layer/customer";
import { CreateCustomerRequestDTO } from "@logic/customer";
import { InternalServerError } from "routing-controllers";

export class CreateCustomerUseCase implements IUseCase {
  constructor(
    private _customerRepo: ICustomerRepository,
    private _dto: CreateCustomerRequestDTO
  ) {}

  async execute(): Promise<string> {
    await this._customerRepo.create(this._dto);
    return "Created customer successfully";
  }
}
