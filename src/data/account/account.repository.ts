import { CreateAccountDTO } from "@logic/dtos/account/CreateAccountDTO";
import { IAccount } from "./interfaces/account.interface";
import { IAccountRepository } from "./interfaces/IAccountRepository";

export class AccountRepository implements IAccountRepository {
  dbSource: any;
  create(account: CreateAccountDTO): boolean {
    throw new Error("Method not implemented.");
  }
  find(): IAccount[] {
    throw new Error("Method not implemented.");
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
    throw new Error("Method not implemented.");
  }
  delete(id: string): null {
    throw new Error("Method not implemented.");
  }
}
