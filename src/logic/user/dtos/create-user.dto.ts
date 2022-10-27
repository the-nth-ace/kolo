import { IsArray, IsEmail, IsOptional, IsString } from "class-validator";
import { UserRole } from "@data-layer/user";

export class CreateUserDTO {
  @IsEmail()
  email: string;

  @IsString()
  passwordHash: string;

  @IsString()
  firstName: string;

  @IsString()
  lastName: string;

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  roles?: Array<UserRole>;
}
