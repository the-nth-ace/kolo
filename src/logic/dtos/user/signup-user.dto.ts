import { IsEmail, IsString, Length } from "class-validator";

export class SignUpUserDTO {
  @IsEmail()
  email: string;

  @IsString()
  passwordHash: string;

  @IsString()
  firstName: string;

  @IsString()
  lastName: string;
}
