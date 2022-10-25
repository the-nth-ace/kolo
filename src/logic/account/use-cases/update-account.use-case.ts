import { IUseCase } from "@logic/lib/IUseCase";
import { IAccountRepository } from "@data-layer/account/interfaces/IAccountRepository";
import { UpdateAccountRequestDTO } from "../requests";

export class UpdateAccountUseCase implements IUseCase {
  constructor(
    private _accountRepo: IAccountRepository,
    private id: string,
    private updateAccountRequestDTO: UpdateAccountRequestDTO
  ) {}
  async execute(): Promise<any> {
    return await this._accountRepo.update(
      this.id,
      this.updateAccountRequestDTO
    );
  }
}
