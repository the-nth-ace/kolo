import { AccountRepository } from "@data/account/account.repository";

export class DeleteAccountUseCase {
  constructor(private accountRepo: AccountRepository) {}

  execute(id: string): null {
    return this.accountRepo.delete(id);
  }
}
