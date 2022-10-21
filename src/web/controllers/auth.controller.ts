import { MongoUserRepository } from "@data/user/user.repository.mongo";
import { LoginDTO } from "@logic/dtos/user/login-user.dto";
import { SignUpUserRequestDTO } from "@logic/dtos/user/signup-user-request.dto";
import { LoginUserUseCase, SignUpUserUseCase } from "@logic/useCases/user";
import { HttpResponseFactory } from "@web/lib/http-response-factory";
import { Body, HttpCode, JsonController, Post } from "routing-controllers";
import { Service } from "typedi";

@JsonController("/auth")
@Service()
export class AuthController {
  public constructor(private readonly _userRepo: MongoUserRepository) {}

  @Post("/login")
  async login(@Body() loginDTo: LoginDTO) {
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
