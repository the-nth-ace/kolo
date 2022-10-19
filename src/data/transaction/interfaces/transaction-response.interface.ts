import { BaseResponse } from "@logic/reponses/BaseResponse";
import { ITransaction } from "./transaction.interface";

export class BaseTransactionResponse extends Response {
  data: ITransaction;
}
