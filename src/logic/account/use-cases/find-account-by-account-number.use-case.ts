import { IUseCase } from "@logic/lib/IUseCase";
import { IAccountRepository } from "@data-layer/account/interfaces/IAccountRepository";
import { IAccount } from "@data-layer/account/account.model";

export class FindAccountByAccountNumberUseCase implements IUseCase {
  constructor(
    private _accountRepo: IAccountRepository,
    private accountNumber: string
  ) {}
  async execute(): Promise<IAccount> {
    return await this._accountRepo.findOneByAccountNumber(this.accountNumber);
  }
}
