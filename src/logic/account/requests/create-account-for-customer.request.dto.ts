import { AccountType } from "@data-layer/account/enums/account-type.enum";
import { IsEnum, IsString, Length } from "class-validator";

export class CreateAccountForCustomerRequestDTO {
  @IsString()
  accountName: string;

  @IsEnum(AccountType)
  accountType: AccountType;

  @IsString()
  @Length(3, 3)
  currency: string;
}
