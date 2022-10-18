import { BaseResponse } from "@logic/reponses/BaseResponse";
import { ICustomer } from "./customer.interface";

export class BaseCustomerResponse extends BaseResponse {
  data: ICustomer;
}
