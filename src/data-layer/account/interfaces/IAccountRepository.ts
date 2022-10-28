import { DbContext } from "@data-layer/DbContext";

export interface IAccountRepository {
  dbContext: DbContext;
  create(createAccountDTO: any): any;
  findAll(): any;
  findOneByAccountNumber(id: string): any;
  findOneById(id: string): any;
  findByBVN(bvn: string): any;
  findOneByNuban(nubanCode: string): any;
  update(id: string, updateAccountRequestDTO: any): any;
  delete(id: string): any;
  chargeAccount(id: string, charge: number): any;
  fundAccount(id: string, charge: number): any;
}
