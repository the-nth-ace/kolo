import { AllowedRoles } from "@web/middlwares/role.middleware";
import { MongoAccountRepository } from "@data-layer/account";
import { MongoCustomerRepository } from "@data-layer/customer";
import { Service } from "typedi";
import { UserRole } from "@data-layer/user";
import { FindTransactionsByAccountUseCase } from "@logic/transaction";
import { MongoTransactionRepository } from "@data-layer/transaction";
import { User } from "../../data-layer/user/user.model";
import {
  TransferFundsFromAccountWithinBankUseCase,
  TransferFundsOutsideRequestDTO,
  TransferFundsFromAccountOutsideBankUseCase,
  FindAccountByAccountNumberUseCase,
  FindAllAccountsUseCase,
  DeleteAccountUseCase,
  UpdateAccountRequestDTO,
  UpdateAccountUseCase,
  TransferFundsWithinRequestDTO,
  FindAccountByIdUseCase,
} from "@logic/account/";

import {
  Body,
  Delete,
  Get,
  HttpCode,
  JsonController,
  Param,
  Patch,
  Post,
  UseBefore,
} from "routing-controllers";

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

  @Get("/acctNumber/:accountNumber")
  @UseBefore(AllowedRoles([UserRole.ADMIN, UserRole.STAFF]))
  async getAccountByAccountNumber(
    @Param("accountNumber") accountNumber: string
  ) {
    const useCase = new FindAccountByAccountNumberUseCase(
      this._accountRepo,
      accountNumber
    );
    return await useCase.execute();
  }

  @Get("/:id")
  @UseBefore(AllowedRoles([UserRole.ADMIN, UserRole.STAFF, UserRole.USER]))
  async getAccountById(@Param("id") id: string) {
    console.log(id);
    const useCase = new FindAccountByIdUseCase(this._accountRepo, id);
    return await useCase.execute();
  }

  @Delete("/:id")
  @HttpCode(204)
  @UseBefore(AllowedRoles([UserRole.ADMIN, UserRole.STAFF, UserRole.USER]))
  async deleteAccount(@Param("id") id: string) {
    const useCase = new DeleteAccountUseCase(this._accountRepo, id);
    return await useCase.execute();
  }

  @Patch("/:id")
  @HttpCode(200)
  @UseBefore(AllowedRoles([UserRole.ADMIN, UserRole.STAFF, UserRole.USER]))
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
  @UseBefore(AllowedRoles([UserRole.ADMIN, UserRole.STAFF, UserRole.USER]))
  async getAccountTransaction(@Param("id") id: string) {
    const useCase = new FindTransactionsByAccountUseCase(
      this._transactionRepo,
      id
    );
    return await useCase.execute();
  }

  @Post("/:id/transfer/")
  @HttpCode(201)
  @UseBefore(AllowedRoles([UserRole.ADMIN, UserRole.STAFF, UserRole.USER]))
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
  @HttpCode(201)
  @UseBefore(AllowedRoles([UserRole.ADMIN, UserRole.STAFF, UserRole.USER]))
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
}
