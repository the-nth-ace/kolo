import { IsArray, IsEmail, IsString } from "class-validator";

export class CreateUserDTO {
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
  roles: Array<string>;
}
