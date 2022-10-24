import { BaseResponse } from "@logic/reponses/BaseResponse";
import { ICustomer } from "@data-layer/customer";

export class BaseCustomerResponse extends BaseResponse {
  data: ICustomer;
}
