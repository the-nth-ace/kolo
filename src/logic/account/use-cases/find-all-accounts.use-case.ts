import { IUseCase } from "@logic/lib/IUseCase";
import { IAccountRepository } from "@data-layer/account/interfaces/IAccountRepository";
import { IAccount } from "@data-layer/account/account.model";

export class FindAllAccountsUseCase implements IUseCase {
  constructor(private _accountRepo: IAccountRepository) {}
  async execute(): Promise<Array<IAccount>> {
    return await this._accountRepo.findAll();
  }
}
