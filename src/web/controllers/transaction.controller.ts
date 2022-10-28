import {
  Body,
  Delete,
  Get,
  JsonController,
  Param,
  Patch,
  Post,
} from "routing-controllers";
import { Service } from "typedi";
import { MongoTransactionRepository } from "@data-layer/transaction/transaction.mongo.repository";
import { CreateSingleTransactionOutsideUseCase } from "../../logic/transaction/use-cases/create-single-transaction-outside.use-case";
import { CreateTransactionOutsideRequestDTO } from "../../logic/transaction/requests/create-transaction-outside-request.dto";
import { UpdateTransactionUseCase } from "../../logic/transaction/use-cases/update-transaction.use-case";
import { UpdateTransactionRequestDTO } from "../../logic/transaction/requests/update-transaction-request.dto";
import { DeleteTransactionUseCase } from "../../logic/transaction/use-cases/delete-transaction.use-case";
import {
  CreateSingleTransactionWithinUseCase,
  CreateTransactionWithinRequestDTO,
  FindAllTransactionsUseCase,
  FindTransactionByIdUseCase,
} from "@logic/transaction";

@JsonController("/transactions")
@Service()
export class TransactionController {
  private constructor(private _transactionRepo: MongoTransactionRepository) {}

  @Get("/")
  async getAllTransactions() {
    const useCase = new FindAllTransactionsUseCase(this._transactionRepo);
    return await useCase.execute();
  }

  @Patch("/:id")
  async updateTransaction(
    @Param("id") id: string,
    @Body() updateTransactioRequest: UpdateTransactionRequestDTO
  ) {
    const useCase = new UpdateTransactionUseCase(
      this._transactionRepo,
      id,
      updateTransactioRequest
    );

    return await useCase.execute();
  }

  // @Post("/")
  // async createNewTransactionWithin(
  //   @Body() createTransactionWithinRequestDTO: CreateTransactionWithinRequestDTO
  // ) {
  //   const useCase = new CreateSingleTransactionWithinUseCase(
  //     this._transactionRepo,
  //     createTransactionWithinRequestDTO
  //   );
  //   return await useCase.execute();
  // }

  // @Post("/outside/")
  // async createNewTransactionOutside(
  //   @Body() createTransactionOutsideRequest: CreateTransactionOutsideRequestDTO
  // ) {
  //   const useCase = new CreateSingleTransactionOutsideUseCase(
  //     this._transactionRepo,
  //     createTransactionOutsideRequest
  //   );
  //   return await useCase.execute();
  // }

  @Get("/:id")
  async getTransactionById(@Param("id") id: string) {
    const useCase = new FindTransactionByIdUseCase(this._transactionRepo, id);
    return await useCase.execute();
  }

  @Delete("/:id")
  async deleteTransaction(@Param("id") id: string) {
    const useCase = new DeleteTransactionUseCase(this._transactionRepo, id);
    return await useCase.execute();
  }
}
