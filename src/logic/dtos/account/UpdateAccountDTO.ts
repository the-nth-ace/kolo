import { IsEnum, IsOptional, IsString, Length } from "class-validator";
import { AccountType } from "@data/account/interfaces/account.interface";
import { EntityStatus } from "@data/common";

export class UpdateAccountDTO {
  @IsString()
  accountId: string;

  @IsOptional()
  @IsEnum(AccountType)
  accountType?: AccountType;

  @IsOptional()
  @IsString()
  @Length(10, 10)
  accountName?: string;

  @IsOptional()
  @IsEnum(EntityStatus)
  status?: EntityStatus;
}
