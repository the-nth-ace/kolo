import { IAccountRepository } from "@data-layer/account/interfaces/IAccountRepository";
import { DbContext } from "@data-layer/DbContext";

export class TestAccountRepository implements IAccountRepository {
  dbContext: DbContext;

  create(createAccountRequestDTO: any): any {}

  delete(id: string): null {
    return null;
  }

  findAll(): any {}

  findOneByAccountNumber(id: string): any {}

  findByBVN(bvn: string): any {}

  findOneByNuban(nubanCode: string): any {}

  update(id: string, updateAccountRequestDTO: any): any {}
}
