import { MongoUserRepository } from "@data-layer/user";
import { SignUpUserRequestDTO, LoginUserRequestDTO } from "@logic/user/";
import { LoginUserUseCase, SignUpUserUseCase } from "@logic/user/use-cases";
import { Body, HttpCode, JsonController, Post } from "routing-controllers";
import { Service } from "typedi";

@JsonController("/auth")
@Service()
export class AuthController {
  public constructor(private readonly _userRepo: MongoUserRepository) {}

  @Post("/login")
  async login(@Body() loginDTo: LoginUserRequestDTO) {
    const useCase = new LoginUserUseCase(this._userRepo, loginDTo);
    return await useCase.execute();
  }

  @Post("/signup")
  @HttpCode(201)
  public async signup(@Body() signUpUserDTO: SignUpUserRequestDTO) {
    const useCase = new SignUpUserUseCase(this._userRepo, signUpUserDTO);
    return await useCase.execute();
  }
}
