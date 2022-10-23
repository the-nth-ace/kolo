import {
  Body,
  Get,
  JsonController,
  Post,
  UseBefore,
} from "routing-controllers";
import { Service } from "typedi";
import { MongoCustomerRepository } from "@data/customer/customer.repository.mongo";
import { GetAllCustomerUseCase } from "@logic/useCases/customer/get-all-customers.use-case";
import { CreateCustomerDTO } from "@logic/dtos/customer";
import { CreateCustomerUseCase } from "@logic/useCases/customer";
import { AllowedRoles } from "@web/middlwares/role.middleware";
import { UserRole } from "@data/user/user.entity";

@JsonController("/customer")
@Service()
export class CustomerController {
  public constructor(private readonly _customerRepo: MongoCustomerRepository) {}

  @Get("/")
  async getAllCustomer() {
    const useCase = new GetAllCustomerUseCase(this._customerRepo);
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
