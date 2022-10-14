import { CreateAccountDTO } from "@logic/dtos/account/CreateAccountDTO";
import {
  IsDefined,
  IsNotEmptyObject,
  IsObject,
  ValidateNested,
} from "class-validator";
import { Type } from "class-transformer";
import { CustomerDTO } from "@logic/dtos/customer/customerDTO";

export class CreateAccountNumberDTO {
  @IsDefined()
  @IsNotEmptyObject()
  @IsObject()
  @ValidateNested()
  @Type(() => CustomerDTO)
  account: CreateAccountDTO;
}
