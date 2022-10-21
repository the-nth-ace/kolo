import { IUserRepository } from "@data/user/interfaces/user-repository.interface";
import { LoginDTO } from "@logic/dtos/user/login-user.dto";
import { Service } from "typedi";
import bcrypt from "bcrypt";
import {
  GenericFailureResponse,
  GenericSuccessResponse,
} from "@logic/reponses";
import { ResponseType } from "@logic/reponses/ResponseType.enum";

@Service()
export class LoginUserUseCase {
  constructor(private _userRepo: IUserRepository, private dto: LoginDTO) {}
  execute() {
    const foundUser = this._userRepo.findUserByEmail(this.dto.email);
    if (!foundUser)
      return new GenericFailureResponse(
        "Check your email and password",
        ResponseType.ValidationError
      );

    console.log(foundUser);
    console.log(this.dto);
    const isMatch = bcrypt.compareSync(
      this.dto.password,
      foundUser.passwordHash
    );

    if (isMatch) return new GenericSuccessResponse("great!");
    return new GenericFailureResponse("not great");
  }
}
