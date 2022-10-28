import {
  Body,
  Delete,
  Get,
  JsonController,
  Param,
  Patch,
  UseBefore,
} from "routing-controllers";
import { Service } from "typedi";
import { MongoTransactionRepository } from "@data-layer/transaction/transaction.mongo.repository";
import { UpdateTransactionUseCase } from "../../logic/transaction/use-cases/update-transaction.use-case";
import { UpdateTransactionRequestDTO } from "../../logic/transaction/requests/update-transaction-request.dto";
import { DeleteTransactionUseCase } from "../../logic/transaction/use-cases/delete-transaction.use-case";
import {
  FindAllTransactionsUseCase,
  FindTransactionByIdUseCase,
} from "@logic/transaction";
import { AllowedRoles } from "@web/middlwares/role.middleware";
import { UserRole } from "@data-layer/user";

@JsonController("/transactions")
@Service()
export class TransactionController {
  private constructor(private _transactionRepo: MongoTransactionRepository) {}

  @UseBefore(AllowedRoles([UserRole.ADMIN, UserRole.STAFF, UserRole.USER]))
  @Get("/")
  async getAllTransactions() {
    const useCase = new FindAllTransactionsUseCase(this._transactionRepo);
    return await useCase.execute();
  }

  @UseBefore(AllowedRoles([UserRole.ADMIN, UserRole.STAFF]))
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
