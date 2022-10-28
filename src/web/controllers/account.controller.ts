import { AllowedRoles } from "@web/middlwares/role.middleware";
import { MongoAccountRepository } from "@data-layer/account";
import { MongoCustomerRepository } from "@data-layer/customer";
import { Service } from "typedi";
import { UserRole } from "@data-layer/user";
import { FindTransactionsByAccountUseCase } from "../../logic/transaction/use-cases/find-transactions-by-account.use-case";
import { MongoTransactionRepository } from "../../data-layer/transaction/transaction.mongo.repository";
import { CreateSingleTransactionWithinUseCase } from "../../logic/transaction/use-cases/create-single-transaction-within.use-case";
import { CreateTransactionWithinRequestDTO } from "../../logic/transaction/requests/create-transaction-within-request.dto";
import { TransferFundsFromAccountWithinBankUseCase } from "../../logic/account/use-cases/transfer-funds-from-account-within-bank.use-case";
import { TransferFundsOutsideRequestDTO } from "../../logic/account/requests/transfer-funds-outside-request.dto";
import { TransferFundsFromAccountOutsideBankUseCase } from "../../logic/account/use-cases/transfer-funds-from-account-outside-bank.use-case";
import {
  Body,
  Delete,
  Get,
  JsonController,
  Param,
  Patch,
  Post,
  UseBefore,
} from "routing-controllers";
import {
  CreateAccountForCustomerRequestDTO,
  CreateAccountRequestDTO,
  CreateAccountUseCase,
  FindAccountByAccountNumberUseCase,
  FindAllAccountsUseCase,
  DeleteAccountUseCase,
  UpdateAccountRequestDTO,
  UpdateAccountUseCase,
  TransferFundsWithinRequestDTO,
} from "@logic/account";

@JsonController("/accounts")
@Service()
export class AccountController {
  public constructor(
    private readonly _accountRepo: MongoAccountRepository,
    private readonly _customerRepo: MongoCustomerRepository,
    private readonly _transactionRepo: MongoTransactionRepository
  ) {}

  @Get("/")
  @UseBefore(AllowedRoles([UserRole.STAFF]))
  async getAllAccounts() {
    const useCase = new FindAllAccountsUseCase(this._accountRepo);
    return await useCase.execute();
  }

  // FIXME Should be a customer route
  @Post("/customer/:id/")
  @UseBefore(AllowedRoles([UserRole.USER]))
  async createAccountForCustomer(
    @Body() createAccountRequest: CreateAccountForCustomerRequestDTO,
    @Param("id") id: string
  ) {
    const dto: CreateAccountRequestDTO = {
      ...createAccountRequest,
      customerId: id,
    };
    const useCase = new CreateAccountUseCase(
      this._accountRepo,
      this._customerRepo,
      dto
    );
    return await useCase.execute();
  }

  @Get("/acctNumber/:accountNumber")
  async getAccountByAccountNumber(
    @Param("accountNumber") accountNumber: string
  ) {
    const useCase = new FindAccountByAccountNumberUseCase(
      this._accountRepo,
      accountNumber
    );
    return await useCase.execute();
  }

  // TODO Find Account By Id UseCase
  // FIXME
  // @Get("/:id")
  // async getAccountByAccountNumber(
  //   @Param("id") id: string
  // ) {
  //   const useCase = new FindAccountByI(
  //     this._accountRepo,
  //     accountNumber
  //   );
  //   return await useCase.execute();
  // }

  @Delete("/:id")
  async deleteAccount(@Param("id") id: string) {
    const useCase = new DeleteAccountUseCase(this._accountRepo, id);
    return await useCase.execute();
  }

  @Patch("/:id")
  async updateAccout(
    @Param("id") id: string,
    @Body() updateAccountDTO: UpdateAccountRequestDTO
  ) {
    const useCase = new UpdateAccountUseCase(
      this._accountRepo,
      id,
      updateAccountDTO
    );
    return await useCase.execute();
  }

  @Get("/:id/transactions/")
  async getAccountTransaction(@Param("id") id: string) {
    const useCase = new FindTransactionsByAccountUseCase(
      this._transactionRepo,
      id
    );
    return await useCase.execute();
  }

  @Post("/:id/transfer/")
  async transferFromAccountWithin(
    @Param("id") id: string,
    @Body() transferFundsRequest: TransferFundsWithinRequestDTO
  ) {
    const useCase = new TransferFundsFromAccountWithinBankUseCase(
      this._transactionRepo,
      this._accountRepo,
      id,
      transferFundsRequest
    );

    return await useCase.execute();
  }

  @Post("/:id/transfer/outside/")
  async transferFromAccountOutside(
    @Param("id") id: string,
    @Body() transferFundsRequest: TransferFundsOutsideRequestDTO
  ) {
    const useCase = new TransferFundsFromAccountOutsideBankUseCase(
      this._transactionRepo,
      this._accountRepo,
      id,
      transferFundsRequest
    );

    return await useCase.execute();
  }

  @Post("/:id/transactions/")
  async createSingleTransactionWithinFromAccount(
    @Param("id") id: string,
    @Body() createTransactionWithinRequest: CreateTransactionWithinRequestDTO
  ) {
    const useCase = new CreateSingleTransactionWithinUseCase(
      this._transactionRepo,
      createTransactionWithinRequest
    );

    return await useCase.execute();
  }

  @Post("/:id/transactions/outside/")
  async createSingleTransactionOutsideFromAccount(
    @Param("id") id: string,
    @Body() createTransactionWithinRequest: CreateTransactionWithinRequestDTO
  ) {
    const useCase = new CreateSingleTransactionWithinUseCase(
      this._transactionRepo,
      createTransactionWithinRequest
    );

    return await useCase.execute();
  }
}
