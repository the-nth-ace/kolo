import { IsArray, IsEmail, IsString } from "class-validator";
import { UserRole } from "@data-layer/user";

export class CreateUserRequestDTO {
  @IsEmail()
  email: string;

  @IsString()
  password: string;

  @IsString()
  firstName: string;

  @IsString()
  lastName: string;

  @IsArray()
  @IsString({ each: true })
  roles: Array<UserRole>;
}
