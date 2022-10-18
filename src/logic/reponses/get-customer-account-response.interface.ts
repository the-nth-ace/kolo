import { IAccount } from "@data/account/interfaces/account.interface";
import { ICustomer } from "@data/customer/interfaces/customer.interface";
import { IGenericResponse } from "@data/common/interfaces";

export class GetCustomerAccountsResponse implements IGenericResponse {
  status: string;
  message: string;
  data: {
    customer: ICustomer;
    accounts: Array<IAccount>;
  };
}
