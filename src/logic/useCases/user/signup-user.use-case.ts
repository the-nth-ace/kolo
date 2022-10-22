import { IUserRepository } from "@data/user/interfaces/user-repository.interface";
import { SignUpUserDTO } from "@logic/dtos/user";
import { SignUpUserRequestDTO } from "@logic/dtos/user/signup-user-request.dto";
import {
  GenericFailureResponse,
  GenericSuccessResponse,
} from "@logic/reponses";
import { ResponseType } from "@logic/reponses/ResponseType.enum";

import { Service } from "typedi";

@Service()
export class SignUpUserUseCase {
  constructor(
    private _userRepo: IUserRepository,
    private dto: SignUpUserRequestDTO
  ) {}
  async execute(): Promise<any> {
    const payload: SignUpUserDTO = {
      email: this.dto.email,
      passwordHash: this.dto.password,
      lastName: this.dto.lastName,
      firstName: this.dto.lastName,
    };
    const user = await this._userRepo.findUserByEmail(this.dto.email);
    if (user)
      return new GenericFailureResponse(
        "User with this email exists",
        ResponseType.BadRequestError
      );
    const newUser = await this._userRepo.createUser(payload);
    if (newUser) return new GenericSuccessResponse("signup successful");
    return new GenericFailureResponse("something went wrong");
  }
}
