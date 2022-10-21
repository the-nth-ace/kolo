import { IGenericResponse } from "@data/common/interfaces";
import { BaseTransactionResponse } from "./interfaces/transaction-response.interface";
import { ITransactionRepository } from "./interfaces/transaction.repository.interface";
import { Transaction } from "./transaction.entity";

export class TestTransactionRepository implements ITransactionRepository {
  findOne(id: string): BaseTransactionResponse {
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
  createSingle(
    createSingleTransactionDTO: Partial<Transaction>
  ): BaseTransactionResponse {
    throw new Error("Method not implemented.");
  }
  createMultiple(
    createMultipleTransactionDTO: Partial<Transaction>[]
  ): BaseTransactionResponse;
  createMultiple(
    createMultipleTransactionDTO: Partial<Transaction>[]
  ): BaseTransactionResponse;
  createMultiple(
    createMultipleTransactionDTO: unknown
  ): BaseTransactionResponse {
    throw new Error("Method not implemented.");
  }
}
