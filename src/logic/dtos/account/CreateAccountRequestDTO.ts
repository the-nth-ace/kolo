import {
  IAccount,
  AccountType,
} from "@data/account/interfaces/account.interface";
import { CustomerDTO } from "../customer/customerDTO";
import { EntityStatus } from "@data/common";
import {
  IsDate,
  IsDefined,
  IsEnum,
  IsNotEmptyObject,
  IsObject,
  IsString,
  Length,
  ValidateNested,
} from "class-validator";
import { Type } from "class-transformer";
import { IBranch } from "@data/bank/interfaces/branch.interface";

export class CreateAccountRequestDTO implements Partial<IAccount> {
  @IsString()
  @Length(10, 100)
  accountName: string;

  @IsDate()
  accountOpeningDate: Date;

  @IsEnum(AccountType)
  accountType: AccountType;

  @IsString()
  @Length(11, 11)
  bvn: string;

  @IsString()
  @Length(2, 4)
  currency: string;

  @IsDefined()
  @IsNotEmptyObject()
  @IsObject()
  @ValidateNested()
  @Type(() => CustomerDTO)
  customer: CustomerDTO;

  @IsDate()
  lastTransactionDate: Date;
}
