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

@JsonController("/customers")
@Service()
export class CustomerController {
  public constructor(
    private readonly _customerRepo: MongoCustomerRepository,
    private readonly _userRepo: MongoUserRepository
  ) {}

  /**
   * @openapi
   * /customers:
   *      get:
   *          tags:
   *            - Customer
   *          description: Responds a list of all customers
   *          responses:
   *              200:
   *                  description: Returns an array of customers
   */
  @Get("/")
  @UseBefore(AllowedRoles([UserRole.ADMIN, UserRole.STAFF]))
  async getAllCustomer() {
    const useCase = new FindAllCustomersUseCase(this._customerRepo);
    return await useCase.execute();
  }

  /**
   * @openapi
   * /customers/{id}:
   *    get:
   *      tags:
   *        - Customer
   *      description: Returns the details of one customer
   *      parameters:
   *        - name: id
   *          in: path
   *          schema:
   *            type: string
   *      responses:
   *        200:
   *          description: Successfully returned one Customer
   */
  @Get("/:id")
  @UseBefore(AllowedRoles([UserRole.ADMIN, UserRole.STAFF, UserRole.USER]))
  async getOneCustomerById(@Param("id") id: string) {
    const useCase = new FindCustomerByIdUseCase(this._customerRepo, id);
    return await useCase.execute();
  }

  /**
   * @openapi
   * /customers/{id}:
   *  patch:
   *    tags:
   *      - Customer
   *    description: Updates a customer
   *    responses:
   *      200:
   *        description: Customer successfully updated
   *      400:
   *        description: Bad Request. Check Request Body
   *
   */
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

  /**
   * @openapi
   * /customers/{id}:
   *  delete:
   *    tags:
   *      - Customer
   *    description: Deletes a customer
   *    parameters:
   *      - name: id
   *        in: path
   *        schema:
   *          type: string
   *    responses:
   *        204:
   *          description: Successfully deleted a customer
   */
  @Delete("/:id")
  @UseBefore(AllowedRoles([UserRole.ADMIN, UserRole.STAFF]))
  @HttpCode(204)
  async deleteCustomerById(@Param("id") id: string) {
    const useCase = new DeleteCustomerUseCase(this._customerRepo, id);
    return await useCase.execute();
  }

  /**
   * @openapi
   * /customers/bvn/{bvn}:
   *  get:
   *    tags:
   *      - Customer
   *    description: Gets One Customer By BVN
   *    parameters:
   *      - name: bvn
   *        in: path
   *        schema:
   *          type: string
   *    responses:
   *      200:
   *        description: Successfully returned one customer
   */

  @Get("/bvn/:bvn")
  @UseBefore(AllowedRoles([UserRole.ADMIN, UserRole.STAFF]))
  async getOneCustomerByBvn(@Param("bvn") bvn: string) {
    const useCase = new FindCustomerByBvnUseCase(this._customerRepo, bvn);
    return await useCase.execute();
  }

  /**
   * @openapi
   * /customers/:
   *    post:
   *        tags:
   *            - Customer
   *        summary: Adds a new customer
   *        requestBody:
   *            required: true
   *            contents:
   *                application/json:
   *                    schema:
   *                      $ref: '#/components/schemas/CreateCustomerInput'
   *
   *        responses:
   *            201:
   *                description: Successfully created a new Customer
   *            400:
   *                description: Bad Request. Check Request Body
   */

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

  /**
   * @openapi
   * /customers/user:
   *    post:
   *        tags:
   *          - Customer
   *        summary: Creates Customer for the current logged in user
   *        required: true
   *
   */

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
