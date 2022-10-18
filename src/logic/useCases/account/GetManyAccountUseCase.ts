import { AccountRepository } from "@data/account/account.repository";

export class GetManyAccountUseCase {
  constructor(private accountRepo: AccountRepository) {}

  execute() {
    return this.accountRepo.find();
  }
}
