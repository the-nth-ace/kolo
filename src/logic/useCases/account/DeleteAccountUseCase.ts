import { IAccountRepository } from "@data/account/interfaces/IAccountRepository";

export class DeleteAccountUseCase {
  constructor(private accountRepo: IAccountRepository) {}

  execute(id: string): null {
    return this.accountRepo.delete(id);
  }
}
