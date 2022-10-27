import { IUseCase } from "@logic/lib/IUseCase";
import { ICustomerRepository } from "@data-layer/customer";
import { CreateCustomerRequestDTO } from "@logic/customer";
import { IUserRepository } from "@data-layer/user";
import { BadRequestError } from "routing-controllers";

export class CreateCustomerForUserUseCase implements IUseCase {
  constructor(
    private _customerRepo: ICustomerRepository,
    private _userRepo: IUserRepository,
    private userId: string,
    private dto: CreateCustomerRequestDTO
  ) {}

  async execute(): Promise<string> {
    const user = await this._userRepo.findUserById(this.userId);

    if (user.customerId)
      throw new BadRequestError("This User already has an associated Customer");

    const customer = await this._customerRepo.create(this.dto);
    await this._userRepo.updateUser(this.userId, {
      customerId: customer._id,
    });
    return "Created Customer For User Successfully";
  }
}
