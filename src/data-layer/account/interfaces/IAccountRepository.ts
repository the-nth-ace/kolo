import { DbContext } from "@data-layer/DbContext";

export interface IAccountRepository {
  dbContext: DbContext;
  create(createAccountDTO: any): any;
  findAll(): any;
  findOneByAccountNumber(id: string): any;
  findByBVN(bvn: string): any;
  findOneByNuban(nubanCode: string): any;
  update(id: string, updateAccountRequestDTO: any): any;
  delete(id: string): any;
}
