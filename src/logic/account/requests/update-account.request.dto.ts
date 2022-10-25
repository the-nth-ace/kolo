import { EntityStatus } from "@data-layer/common";
import { IsEnum, IsOptional, IsString, Length } from "class-validator";
import { AccountType } from "@data-layer/account";

export class UpdateAccountRequestDTO {
  @IsOptional()
  @IsString()
  @Length(5, 100)
  accountName?: string;

  @IsOptional()
  @IsEnum(AccountType)
  accountType?: AccountType;

  @IsOptional()
  @IsString()
  currency?: string;

  @IsString()
  customerId?: string;

  @IsOptional()
  @IsEnum(EntityStatus)
  status?: EntityStatus;
}
