import { IUserRepository } from "../../../data-layer/user/interfaces/user-repository.interface";
import { SignUpUserDTO } from "@logic/dtos/user";
import { SignUpUserRequestDTO } from "@logic/dtos/user/signup-user-request.dto";
import {
  GenericFailureResponse,
  GenericSuccessResponse,
} from "@logic/reponses";
import { ResponseType } from "@logic/reponses/ResponseType.enum";

import { Service } from "typedi";
import { InternalServerError, BadRequestError } from "routing-controllers";

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
    if (user) throw new BadRequestError("User with this email alrealy exists");
    const newUser = await this._userRepo.signupUser(payload);
    if (newUser) return;
    throw new InternalServerError("Something went wrong");
  }
}
