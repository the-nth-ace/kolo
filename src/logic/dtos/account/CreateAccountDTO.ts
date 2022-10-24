import {
  IAccount,
  AccountType,
} from "../../../data-layer/account/interfaces/account.interface";
import { CustomerDTO } from "../customer/customerDTO";
import { EntityStatus } from "../../../data-layer/common";
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

export class CreateAccountDTO implements Partial<IAccount> {
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

  @IsString()
  @Length(9, 9)
  nubanSerial: string;

  @IsString()
  @Length(10, 10)
  accountNumber: string;
}
