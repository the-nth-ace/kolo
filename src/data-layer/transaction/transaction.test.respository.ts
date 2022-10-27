import { ITransactionRepository } from "@data-layer/transaction/";
import {
  CreateTransactionOutsideRequestDTO,
  UpdateTransactionRequestDTO,
} from "@logic/transaction";
import { DbContext } from "@data-layer/DbContext";

export class TestTransactionRepository implements ITransactionRepository {
  update(id: string, updateTransactionRequestDTO: UpdateTransactionRequestDTO) {
    throw new Error("Method not implemented.");
  }

  delete(id: string) {
    throw new Error("Method not implemented.");
  }
  findOne(id: string) {
    throw new Error("Method not implemented.");
  }
  findAll() {
    throw new Error("Method not implemented.");
  }
  findLastN(n: number) {
    throw new Error("Method not implemented.");
  }
  createSingle(createSingleTransactionDTO: CreateTransactionOutsideRequestDTO) {
    throw new Error("Method not implemented.");
  }
  createMultiple(
    createMultipleTransactionDTO: Array<CreateTransactionOutsideRequestDTO>
  ): any {
    throw new Error("Method not implemented.");
  }

  findByAccountId(id: string) {
    throw new Error("Method not implemented");
  }

  dbContext: DbContext;
}
