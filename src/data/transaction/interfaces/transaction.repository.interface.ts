import { IGenericResponse } from "@data/common/interfaces";
import { Statement } from "../../statement/statement.entity";
import { BaseTransactionResponse } from "./transaction-response.interface";

export interface ITransactionRepository {
  create(createTransactionDTO: Partial<Statement>): BaseTransactionResponse;
  update(updateCustomerDTO: any): IGenericResponse;
  delete(id: string): BaseTransactionResponse;
  findAll(): BaseTransactionResponse;
}
