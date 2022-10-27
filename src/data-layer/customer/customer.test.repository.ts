import { ICustomerRepository } from "@data-layer/customer/interfaces";
import { DbContext } from "@data-layer/DbContext";
import { ICustomer } from "@data-layer/customer/customer.model";
import { CreateCustomerRequestDTO } from "@logic/customer/requests";

export class TestCustomerRepository implements ICustomerRepository {
  dbContext: DbContext;

  create(
    createCustomerDTO: CreateCustomerRequestDTO
  ): Promise<ICustomer | null> | null {
    throw new Error("Method not implemented");
  }

  createCustomerFeedback(feedbackDTO: any): any {
    throw new Error("Method not implemented");
  }

  delete(id: string): Promise<null> {
    throw new Error("Method not implemented");
  }

  findAll(): Promise<Array<ICustomer>> {
    throw new Error("Method not implemented");
  }

  findByBVN(bvn: string): Promise<ICustomer | null> | null {
    throw new Error("Method not implemented");
  }

  findById(id: string): any {
    throw new Error("Method not implemented");
  }

  findCustomerAccounts(id: string): any {
    throw new Error("Method not implemented");
  }

  update(id: any, updateCustomerDTO: any): Promise<ICustomer> {
    throw new Error("Method not implemented");
  }
}
