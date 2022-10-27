import { ITransactionRepository } from "@data-layer/transaction/interfaces";
import {
  CreateTransactionOutsideRequestDTO,
  UpdateTransactionRequestDTO,
} from "@logic/transaction";
import { DbContext } from "@data-layer/DbContext";
import { InternalServerError } from "routing-controllers";
import { Service } from "typedi";
import { ITransaction } from "@data-layer/transaction/transaction.model";

@Service()
export class MongoTransactionRepository implements ITransactionRepository {
  constructor(public dbContext: DbContext) {}
  createMultiple(
    createMultipleTransactionDTO: Array<CreateTransactionOutsideRequestDTO>
  ): any {}

  async createSingle(
    createSingleTransactionDTO: CreateTransactionOutsideRequestDTO
  ): Promise<any> {
    try {
      return await this.dbContext.transaction.create(
        createSingleTransactionDTO
      );
    } catch (e) {
      throw new InternalServerError(
        "Something went wrong while creating the Transaction"
      );
    }
  }

  async delete(id: string): Promise<any> {
    try {
      await this.dbContext.transaction.findByIdAndDelete(id);
      return null;
    } catch (e) {
      throw new InternalServerError(
        "Something went wrong while Transaction was being deleted in DB"
      );
    }
  }

  async findAll(): Promise<Array<ITransaction>> {
    return await this.dbContext.transaction.find().exec();
  }

  async findByAccountId(id: string): Promise<ITransaction> {
    const transaction = await this.dbContext.transaction.findById(id).exec();
    if (transaction) return transaction;
    throw new InternalServerError(`Transaction with ID ${id} does not exist`);
  }

  findLastN(n: number): any {}

  findOne(id: string): any {}

  update(
    id: string,
    updateTransactionRequestDTO: UpdateTransactionRequestDTO
  ): any {}
}
