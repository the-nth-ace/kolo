import { IsEmail, IsString, Length } from "class-validator";

export class SignUpUserRequestDTO {
  @IsEmail()
  email: string;

  @IsString()
  @Length(10, 50)
  password: string;

  @IsString()
  firstName: string;

  @IsString()
  lastName: string;
}
