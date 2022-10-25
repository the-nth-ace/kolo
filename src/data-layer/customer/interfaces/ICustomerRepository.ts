import { DbContext } from "@data-layer/DbContext";

export interface ICustomerRepository {
  dbContext: DbContext;
  create(createCustomerDTO: any): any;
  update(id: any, updateCustomerDTO: any): any;
  delete(id: string): any;
  findAll(): any;
  findById(id: string): any;
  findByBVN(bvn: string): any;
  findCustomerAccounts(id: string): any;
  createCustomerFeedback(feedbackDTO: any): any;
}
