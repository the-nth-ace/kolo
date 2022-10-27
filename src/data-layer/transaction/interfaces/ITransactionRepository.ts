import {
  CreateTransactionOutsideRequestDTO,
  UpdateTransactionRequestDTO,
} from "@logic/transaction";
import { DbContext } from "@data-layer/DbContext";

export interface ITransactionRepository {
  dbContext: DbContext;
  update(
    id: string,
    updateTransactionRequestDTO: UpdateTransactionRequestDTO
  ): any;
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
  findByAccountId(id: string): any;
}
