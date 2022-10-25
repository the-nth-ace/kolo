import { CreateTransactionOutsideRequestDTO } from "@logic/transaction";

export interface ITransactionRepository {
  update(updateTransactionTTO: any): any;
  delete(id: string): any;
  findOne(id: string): any;
  findAll(): any;
  findLastN(n: number): any;
  createSingle(
    createSingleTransactionDTO: CreateTransactionOutsideRequestDTO
  ): any;
  createMultiple(
    createMultipleTransactionDTO: Array<CreateTransactionOutsideRequestDTO>
  ): any;
}
