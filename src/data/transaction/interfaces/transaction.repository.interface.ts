import { IGenericResponse } from "@data/common/interfaces";
import { Transaction } from "../transaction.entity";
import { BaseTransactionResponse } from "./transaction-response.interface";

export interface ITransactionRepository {
  create(createTransactionDTO: Partial<Transaction>): BaseTransactionResponse;
  update(updateTransactionTTO: Partial<Transaction>): IGenericResponse;
  delete(id: string): BaseTransactionResponse;
  findAll(): BaseTransactionResponse;
  findLastN(n: number): BaseTransactionResponse;
  createSingleWithinBank(
    createSingleTransactionWithinDTO: Partial<Transaction>
  ): BaseTransactionResponse;
  createSingleAnotherBank(
    createSingleTransactionAnotherDTO: Partial<Transaction>
  ): BaseTransactionResponse;
  createMultipleWithinBank(
    createMultipleTransactionWithinDTO: Array<Partial<Transaction>>
  ): BaseTransactionResponse;
  createMultipleAnotherBank(
    createMultipleTransactionAnotherDTO: Array<Partial<Transaction>>
  ): BaseTransactionResponse;
}
