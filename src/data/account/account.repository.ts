import { IAccountRepository } from "./interfaces/IAccountRepository";
import { IAccount } from "./interfaces/account.interface";

export class AccountRepository implements IAccountRepository {
  create(account: Partial<IAccount>): boolean {
    return false;
  }

  delete(id: string): null {
    return null;
  }

  find(): Array<IAccount> {
    throw new Error("This method is not implemented");
  }

  findOne(id: string): IAccount {
    throw new Error("This method is not implemented");
  }

  update(id: string, account: Partial<IAccount>): boolean {
    throw new Error("This method is not implemented");
  }
}
