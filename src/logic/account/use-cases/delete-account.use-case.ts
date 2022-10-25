import { IUseCase } from "@logic/lib/IUseCase";
import { IAccountRepository } from "@data-layer/account/interfaces/IAccountRepository";
import { EntityStatus } from "@data-layer/common";

export class DeleteAccountUseCase implements IUseCase {
  constructor(private _accountRepo: IAccountRepository, private id: string) {}
  async execute(): Promise<any> {
    return await this._accountRepo.update(this.id, {
      status: EntityStatus.INACTIVE,
    });
  }
}
