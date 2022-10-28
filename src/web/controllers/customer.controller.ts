import {
  Body,
  Delete,
  Get,
  HttpCode,
  JsonController,
  Param,
  Patch,
  Post,
  Req,
  UseBefore,
} from "routing-controllers";
import { Service } from "typedi";
import { MongoCustomerRepository } from "@data-layer/customer";
import {
  CreateCustomerForUserUseCase,
  CreateCustomerRequestDTO,
  CreateCustomerUseCase,
  DeleteCustomerUseCase,
  FindAllCustomersUseCase,
  FindCustomerByBvnUseCase,
  FindCustomerByIdUseCase,
  UpdateCustomerRequestDTO,
  UpdateCustomerUseCase,
} from "@logic/customer";
import { AllowedRoles } from "@web/middlwares/role.middleware";
import { MongoUserRepository, UserRole } from "@data-layer/user";

@JsonController("/customer")
@Service()
export class CustomerController {
  public constructor(
    private readonly _customerRepo: MongoCustomerRepository,
    private readonly _userRepo: MongoUserRepository
  ) {}

  @Get("/")
  @UseBefore(AllowedRoles([UserRole.ADMIN, UserRole.STAFF]))
  async getAllCustomer() {
    const useCase = new FindAllCustomersUseCase(this._customerRepo);
    return await useCase.execute();
  }
  @Get("/:id")
  @UseBefore(AllowedRoles([UserRole.ADMIN, UserRole.STAFF, UserRole.USER]))
  async getOneCustomerById(@Param("id") id: string) {
    const useCase = new FindCustomerByIdUseCase(this._customerRepo, id);
    return await useCase.execute();
  }

  @Patch("/:id")
  @UseBefore(AllowedRoles([UserRole.ADMIN, UserRole.STAFF]))
  async updateCustomerById(
    @Param("id") id: string,
    @Body() updateDTO: UpdateCustomerRequestDTO
  ) {
    const useCase = new UpdateCustomerUseCase(
      this._customerRepo,
      id,
      updateDTO
    );
    return await useCase.execute();
  }

  @Delete("/:id")
  @UseBefore(AllowedRoles([UserRole.ADMIN, UserRole.STAFF]))
  @HttpCode(204)
  async deleteCustomerById(@Param("id") id: string) {
    const useCase = new DeleteCustomerUseCase(this._customerRepo, id);
    return await useCase.execute();
  }

  @Get("/bvn/:bvn")
  @UseBefore(AllowedRoles([UserRole.ADMIN, UserRole.STAFF]))
  async getOneCustomerByBvn(@Param("bvn") bvn: string) {
    const useCase = new FindCustomerByBvnUseCase(this._customerRepo, bvn);
    return await useCase.execute();
  }

  @Post("/")
  @HttpCode(201)
  @UseBefore(AllowedRoles([UserRole.ADMIN, UserRole.STAFF]))
  async addCustomer(@Body() createCustomerDTO: CreateCustomerRequestDTO) {
    const useCase = new CreateCustomerUseCase(
      this._customerRepo,
      createCustomerDTO
    );
    return await useCase.execute();
  }

  @Post("/user")
  @HttpCode(201)
  @UseBefore(AllowedRoles([UserRole.USER]))
  async createCustomerForUser(
    @Body() createCustomerRequestDTO: CreateCustomerRequestDTO,
    @Req() request: any
  ) {
    const userId = request.user._id;
    const useCase = new CreateCustomerForUserUseCase(
      this._customerRepo,
      this._userRepo,
      userId,
      createCustomerRequestDTO
    );
    return await useCase.execute();
  }
}
