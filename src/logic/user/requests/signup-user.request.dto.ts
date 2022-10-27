import { IsEmail, IsString, Length } from "class-validator";

export class SignUpUserRequestDTO {
  @IsEmail()
  email: string;

  @IsString()
  password: string;

  @IsString()
  firstName: string;

  @IsString()
  lastName: string;
}
