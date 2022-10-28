import { IAccount } from "@data-layer/account";
import { IUseCase } from "@logic/lib/IUseCase";
import { IAccountRepository } from "../../../data-layer/account/interfaces/IAccountRepository";

export class FindAccountByIdUseCase implements IUseCase {
  constructor(private _accountRepo: IAccountRepository, private id: string) {}
  async execute(): Promise<IAccount> {
    return await this._accountRepo.findOneById(this.id);
  }
}
