import { IUseCase } from "@logic/lib/IUseCase";
import { IAccountRepository } from "@data-layer/account/interfaces/IAccountRepository";
import { UpdateCustomerRequestDTO } from "@logic/customer";

export class UpdateAccountUseCase implements IUseCase {
  constructor(
    private _accountRepo: IAccountRepository,
    private id: string,
    private updateAccountRequestDTO: any
  ) {}
  async execute(): Promise<any> {
    return await this._accountRepo.update(
      this.id,
      this.updateAccountRequestDTO
    );
  }
}
