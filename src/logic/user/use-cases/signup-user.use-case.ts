import { IUserRepository } from "@data-layer/user/";
import { CreateUserDTO, SignUpUserRequestDTO } from "@logic/user/";
import { Service } from "typedi";
import { InternalServerError, BadRequestError } from "routing-controllers";

@Service()
export class SignUpUserUseCase {
  constructor(
    private _userRepo: IUserRepository,
    private dto: SignUpUserRequestDTO
  ) {}
  async execute(): Promise<any> {
    const payload: CreateUserDTO = {
      email: this.dto.email,
      passwordHash: this.dto.password,
      lastName: this.dto.lastName,
      firstName: this.dto.lastName,
    };
    try {
      await this._userRepo.findUserByEmail(this.dto.email);
      throw new BadRequestError("User with this email already exists");
    } catch (err) {
      const newUser = await this._userRepo.createUser(payload);
      return "Signup Successful";
    }
  }
}
