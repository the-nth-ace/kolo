import { ITransactionRepository } from "@data-layer/transaction/interfaces";
import {
  CreateTransactionOutsideRequestDTO,
  UpdateTransactionRequestDTO,
} from "@logic/transaction";
import { DbContext } from "@data-layer/DbContext";
import { InternalServerError, NotFoundError } from "routing-controllers";
import { Service, Container } from "typedi";
import { ITransaction } from "@data-layer/transaction/transaction.model";

@Service()
export class MongoTransactionRepository implements ITransactionRepository {
  dbContext: DbContext;
  constructor() {
    this.dbContext = Container.get(DbContext);
  }
  createMultiple(
    createMultipleTransactionDTO: Array<CreateTransactionOutsideRequestDTO>
  ): any {
    // TODO Create Many with mongoose
    // try{
    //   return await this.dbContext.transaction.(crea)
    // }
  }

  async createSingle(
    createSingleTransactionDTO: CreateTransactionOutsideRequestDTO
  ): Promise<any> {
    try {
      return await this.dbContext.transaction.create(
        createSingleTransactionDTO
      );
    } catch (e) {
      console.log(e);
      throw new InternalServerError(
        "Something went wrong while creating the Transaction"
      );
    }
  }

  async delete(id: string): Promise<any> {
    try {
      await this.dbContext.transaction.findByIdAndDelete(id).exec();
      return null;
    } catch (e) {
      throw new InternalServerError(
        "Something went wrong while Transaction was being deleted in DB"
      );
    }
  }

  async findAll(): Promise<Array<ITransaction>> {
    const data = await this.dbContext.transaction.find().exec();
    return data.map((dat) => dat.toObject());
  }

  async findByAccountId(id: string): Promise<Array<ITransaction>> {
    return await this.dbContext.transaction
      .find({
        sourceAccount: id,
      })
      .exec();
  }

  // TODO SORT BY FIELD
  findLastN(n: number): any {}

  async findOne(id: string): Promise<ITransaction> {
    const transaction = await this.dbContext.customer.findById(id).exec();
    if (transaction) return transaction.toObject();
    throw new NotFoundError("Cusomer with ID was not found");
  }

  async update(
    id: string,
    updateTransactionRequestDTO: UpdateTransactionRequestDTO
  ): Promise<ITransaction | null> {
    try {
      return await this.dbContext.transaction
        .findByIdAndUpdate(id, updateTransactionRequestDTO)
        .exec();
    } catch (e) {
      throw new InternalServerError(
        "Something went wrong while updating transaction"
      );
    }
  }
}
