import { AllowedRoles } from "@web/middlwares/role.middleware";
import { MongoAccountRepository } from "@data-layer/account";
import { MongoCustomerRepository } from "@data-layer/customer";
import { Service } from "typedi";
import { UserRole } from "@data-layer/user";
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
} from "@logic/account";

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
}
