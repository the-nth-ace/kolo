import { IUseCase } from "@logic/lib/IUseCase";
import { IAccountRepository } from "@data-layer/account/interfaces/IAccountRepository";
import { IAccount } from "@data-layer/account/account.model";

export class FindAccountsByBvnUseCase implements IUseCase {
  constructor(private _accountRepo: IAccountRepository, private bvn: string) {}
  async execute(): Promise<IAccount[]> {
    return await this._accountRepo.findByBVN(this.bvn);
  }
}
