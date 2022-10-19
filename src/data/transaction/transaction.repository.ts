import { IGenericResponse } from "@data/common/interfaces";
import { BaseTransactionResponse } from "./interfaces/transaction-response.interface";
import { ITransactionRepository } from "./interfaces/transaction.repository.interface";
import { Transaction } from "./transaction.entity";

export class TransactionRepository implements ITransactionRepository {
  create(createTransactionDTO: Partial<Transaction>): BaseTransactionResponse {
    throw new Error("Method not implemented.");
  }
  update(updateTransactionTTO: Partial<Transaction>): IGenericResponse {
    throw new Error("Method not implemented.");
  }
  delete(id: string): BaseTransactionResponse {
    throw new Error("Method not implemented.");
  }
  findAll(): BaseTransactionResponse {
    throw new Error("Method not implemented.");
  }
  findLastN(n: number): BaseTransactionResponse {
    throw new Error("Method not implemented.");
  }
  createSingleWithinBank(
    createSingleTransactionWithinDTO: Partial<Transaction>
  ): BaseTransactionResponse {
    throw new Error("Method not implemented.");
  }
  createSingleAnotherBank(
    createSingleTransactionAnotherDTO: Partial<Transaction>
  ): BaseTransactionResponse {
    throw new Error("Method not implemented.");
  }
  createMultipleWithinBank(
    createMultipleTransactionWithinDTO: Partial<Transaction>[]
  ): BaseTransactionResponse {
    throw new Error("Method not implemented.");
  }
  createMultipleAnotherBank(
    createMultipleTransactionAnotherDTO: Partial<Transaction>[]
  ): BaseTransactionResponse {
    throw new Error("Method not implemented.");
  }
}
