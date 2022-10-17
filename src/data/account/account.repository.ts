import { IAccountRepository } from "./interfaces/IAccountRepository";
import { IAccount } from "./interfaces/account.interface";

export class AccountRepository implements IAccountRepository {
  create(account: Partial<IAccount>): boolean {
    return true;
  }

  delete(id: string): null {
    return null;
  }

  find(): Array<IAccount> {
    throw new Error("This method is not implemented");
  }

  findOneByAccountNumber(id: string): IAccount {
    throw new Error("Method not implemented.");
  }
  findOneByBVN(bvn: string): IAccount {
    throw new Error("Method not implemented.");
  }
  findOneByNuban(nubanCode: string): IAccount {
    throw new Error("Method not implemented.");
  }
  update(id: string, account: Partial<IAccount>): boolean {
    throw new Error("This method is not implemented");
  }
}
