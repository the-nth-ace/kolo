import { IUseCase } from "@logic/lib/IUseCase";
import { ICustomer, ICustomerRepository } from "@data-layer/customer";
import { UpdateCustomerRequestDTO } from "@logic/customer";
import { InternalServerError } from "routing-controllers";

export class UpdateCustomerUseCase implements IUseCase {
  constructor(
    private _customerRepo: ICustomerRepository,
    private id: string,
    private updateCustomerRequestDTO: UpdateCustomerRequestDTO
  ) {}
  async execute(): Promise<string> {
    try {
      await this._customerRepo.update(this.id, this.updateCustomerRequestDTO);
      return "success";
    } catch (err: any) {
      throw new InternalServerError(err.message);
    }
  }
}
