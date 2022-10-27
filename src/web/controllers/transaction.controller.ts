import { Body, Get, JsonController, Param, Post } from "routing-controllers";
import { Service } from "typedi";
import { MongoTransactionRepository } from "@data-layer/transaction/transaction.mongo.repository";
import {
  CreateSingleTransactionWithinUseCase,
  CreateTransactionWithinRequestDTO,
  FindAllTransactionsUseCase,
  FindTransactionByIdUseCase,
} from "@logic/transaction";

@JsonController("/transaction")
@Service()
export class TransactionController {
  private constructor(private _transactionRepo: MongoTransactionRepository) {}

  @Get("/")
  async getAllTransactions() {
    const useCase = new FindAllTransactionsUseCase(this._transactionRepo);
    return await useCase.execute();
  }
  @Post("/")
  async createNewTransactionWithing(
    @Body() createTransactionWithinRequestDTO: CreateTransactionWithinRequestDTO
  ) {
    const useCase = new CreateSingleTransactionWithinUseCase(
      this._transactionRepo,
      createTransactionWithinRequestDTO
    );
    return await useCase.execute();
  }

  @Get("/:id")
  async getTransactionById(@Param("id") id: string) {
    const useCase = new FindTransactionByIdUseCase(this._transactionRepo, id);
    return await useCase.execute();
  }
}
