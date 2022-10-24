import {
  Body,
  Get,
  JsonController,
  Param,
  Post,
  UseBefore,
  Patch,
  Delete,
} from "routing-controllers";
import { Service } from "typedi";
import { MongoCustomerRepository } from "../../data-layer/customer/customer.repository.mongo";
import { CreateCustomerDTO, UpdateCustomerDTO } from "@logic/dtos/customer";
import {
  CreateCustomerUseCase,
  GetCustomerByIdUseCase,
  UpdateCustomerUseCase,
  GetCustomerByBVNUseCase,
  GetAllCustomerUseCase,
} from "@logic/useCases/customer";
import { AllowedRoles } from "@web/middlwares/role.middleware";
import { UserRole } from "../../data-layer/user/user.entity";
import { DeleteCustomerUseCase } from "@logic/useCases/customer";

@JsonController("/customer")
@Service()
export class CustomerController {
  public constructor(private readonly _customerRepo: MongoCustomerRepository) {}

  @Get("/")
  async getAllCustomer() {
    const useCase = new GetAllCustomerUseCase(this._customerRepo);
    return await useCase.execute();
  }
  @Get("/:id")
  async getOneCustomerById(@Param("id") id: string) {
    const useCase = new GetCustomerByIdUseCase(this._customerRepo, { id });
    return await useCase.execute();
  }

  @Patch("/:id")
  async updateCustomerById(
    @Param("id") id: string,
    @Body() updateDTO: UpdateCustomerDTO
  ) {
    const useCase = new UpdateCustomerUseCase(
      this._customerRepo,
      id,
      updateDTO
    );
    return await useCase.execute();
  }

  @Delete("/:id")
  async deleteCustomerById(@Param("id") id: string) {
    const useCase = new DeleteCustomerUseCase(this._customerRepo, id);
    return await useCase.execute();
  }

  @Get("/bvn/:bvn")
  async getOneCustomerByBvn(@Param("bvn") bvn: string) {
    const useCase = new GetCustomerByBVNUseCase(this._customerRepo, { bvn });
    return await useCase.execute();
  }

  @Post("/")
  @UseBefore(AllowedRoles([UserRole.ADMIN, UserRole.STAFF]))
  async addCustomer(@Body() createCustomerDTO: CreateCustomerDTO) {
    const useCase = new CreateCustomerUseCase(
      this._customerRepo,
      createCustomerDTO
    );
    return await useCase.execute();
  }
}
