import { IGenericResponse } from "@data/common/interfaces";
import { Transaction } from "../transaction.entity";
import { BaseTransactionResponse } from "./transaction-response.interface";

export interface ITransactionRepository {
  update(updateTransactionTTO: Partial<Transaction>): IGenericResponse;
  delete(id: string): BaseTransactionResponse;
  findAll(): BaseTransactionResponse;
  findLastN(n: number): BaseTransactionResponse;
  createSingle(
    createSingleTransactionDTO: Partial<Transaction>
  ): BaseTransactionResponse;
  createMultiple(
    createMultipleTransactionDTO: Array<Partial<Transaction>>
  ): BaseTransactionResponse;
  createMultiple(
    createMultipleTransactionDTO: Array<Partial<Transaction>>
  ): BaseTransactionResponse;
}
