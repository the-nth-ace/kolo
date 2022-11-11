import { MongoUserRepository } from "@data-layer/user";
import { SignUpUserRequestDTO, LoginUserRequestDTO } from "@logic/user/";
import { LoginUserUseCase, SignUpUserUseCase } from "@logic/user/use-cases";
import {
  Body,
  Get,
  HttpCode,
  JsonController,
  Param,
  Post,
} from "routing-controllers";
import { Service } from "typedi";
import { CheckUserWithEmailUseCase } from "../../logic/user/use-cases/check-user-with-email.use-case";

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

  @Get("/user/email/:email")
  public async findUserByEmail(@Param("email") email: string) {
    const useCase = new CheckUserWithEmailUseCase(this._userRepo, email);
    return await useCase.execute();
  }
}
