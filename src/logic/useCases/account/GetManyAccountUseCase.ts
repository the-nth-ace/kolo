import { IAccountRepository } from "@data/account/interfaces/IAccountRepository";

export class GetManyAccountUseCase {
  constructor(private accountRepo: IAccountRepository) {}

  execute() {
    return this.accountRepo.find();
  }
}
