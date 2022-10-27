import { IsEmail, IsString } from "class-validator";

export class LoginUserRequestDTO {
  @IsEmail()
  email: string;

  @IsString()
  password: string;
}
