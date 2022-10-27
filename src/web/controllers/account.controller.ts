import {
  Body,
  Get,
  JsonController,
  Param,
  Post,
  UseBefore,
} from "routing-controllers";
import { Service } from "typedi";
import { MongoAccountRepository } from "@data-layer/account/account.mongo.respository";
import {
  CreateAccountForCustomerRequestDTO,
  CreateAccountRequestDTO,
  CreateAccountUseCase,
  FindAccountByAccountNumberUseCase,
  FindAllAccountsUseCase,
} from "@logic/account";
import { UserRole } from "@data-layer/user";
import { AllowedRoles } from "@web/middlwares/role.middleware";
import { MongoCustomerRepository } from "@data-layer/customer";

@JsonController("/account")
@Service()
export class AccountController {
  public constructor(
    private readonly _accountRepo: MongoAccountRepository,
    private readonly _customerRepo: MongoCustomerRepository
  ) {}

  @Get("/")
  @UseBefore(AllowedRoles([UserRole.STAFF]))
  async getAllAccounts() {
    const useCase = new FindAllAccountsUseCase(this._accountRepo);
    return await useCase.execute();
  }

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

  @Get("/:accountNumber")
  async getAccountByAccountNumber(
    @Param("accountNumber") accountNumber: string
  ) {
    const useCase = new FindAccountByAccountNumberUseCase(
      this._accountRepo,
      accountNumber
    );
    return await useCase.execute();
  }
}
