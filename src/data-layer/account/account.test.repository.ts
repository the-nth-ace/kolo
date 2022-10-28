import { IAccountRepository } from "@data-layer/account/interfaces/IAccountRepository";
import { DbContext } from "@data-layer/DbContext";

export class TestAccountRepository implements IAccountRepository {
  chargeAccount(id: string, charge: number) {
    throw new Error("Method not implemented.");
  }
  fundAccount(id: string, charge: number) {
    throw new Error("Method not implemented.");
  }
  findOneById(id: string) {
    throw new Error("Method not implemented.");
  }
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
