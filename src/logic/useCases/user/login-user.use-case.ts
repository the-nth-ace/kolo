import { IUserRepository } from "@data/user/interfaces/user-repository.interface";
import { LoginDTO } from "@logic/dtos/user/login-user.dto";
import { Service } from "typedi";
import bcrypt from "bcrypt";
import {
  GenericFailureResponse,
  GenericSuccessResponse,
} from "@logic/reponses";
import { ResponseType } from "@logic/reponses/ResponseType.enum";
import jwt from "jsonwebtoken";
import { IUser } from "@data/user/user.model";
import { BadRequestError } from "routing-controllers";

@Service()
export class LoginUserUseCase {
  secret = process.env.SECRET;
  constructor(private _userRepo: IUserRepository, private dto: LoginDTO) {}
  async execute() {
    const foundUser: IUser | null = await this._userRepo.findUserByEmail(
      this.dto.email
    );

    if (!foundUser) throw new BadRequestError("check your email and password");

    const isMatch = await this.checkPassword(
      this.dto.password,
      foundUser.passwordHash
    );

    if (isMatch) {
      const token = await this.signUser(foundUser);

      const data = {
        user: {
          id: foundUser._id.toString(),
          email: foundUser.email,
        },
        token: token,
      };

      return data;
    }
    throw new BadRequestError("check your email and password");
  }

  async checkPassword(
    candidatePass: string,
    databasePass: string
  ): Promise<boolean> {
    return bcrypt.compareSync(candidatePass, databasePass);
  }

  async signUser(user: IUser) {
    return jwt.sign(
      { _id: user._id?.toString(), email: user.email },
      this.secret,
      {
        expiresIn: "2 days",
      }
    );
  }
}
