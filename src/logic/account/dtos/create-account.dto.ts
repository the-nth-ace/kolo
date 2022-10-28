import { AccountType } from "@data-layer/account/";
import { IsEnum, IsString, Length } from "class-validator";

export class CreateAccountDTO {
  @IsString()
  accountName: string;

  @IsEnum(AccountType)
  accountType: AccountType;

  @IsString()
  @Length(3, 3)
  currency: string;

  @IsString()
  customerId: string;

  @IsString()
  @Length(10, 10)
  accountNumber: string;

  @IsString()
  @Length(9, 9)
  nubanCode: string;
}
