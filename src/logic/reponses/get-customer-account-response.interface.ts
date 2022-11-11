import { IAccount } from "@data-layer/account/";
import { IGenericResponse } from "@data-layer/common/interfaces";
import { ICustomer } from "@data-layer/customer";

export class GetCustomerAccountsResponse implements IGenericResponse {
  status: number;
  message: string;
  data: {
    customer: ICustomer;
    accounts: Array<IAccount>;
  };
  resp_type: any;
}
