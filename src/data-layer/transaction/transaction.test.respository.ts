import { ITransactionRepository } from "@data-layer/transaction/";
import { CreateTransactionOutsideRequestDTO } from "@logic/transaction";

export class TestTransactionRepository implements ITransactionRepository {
  update(updateTransactionTTO: any) {
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
}