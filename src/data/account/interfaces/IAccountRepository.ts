import { IAccount } from "./account.interface";
import { CreateAccountDTO } from "../../../logic/dtos/account/CreateAccountDTO";

export interface IAccountRepository {
  create(account: CreateAccountDTO): boolean;
  find(): Array<IAccount>;
  findOneByAccountNumber(id: string): IAccount;
  findOneByBVN(bvn: string): IAccount;
  findOneByNuban(nubanCode: string): IAccount;
  update(id: string, account: Partial<IAccount>): boolean;
  delete(id: string): null;
}
