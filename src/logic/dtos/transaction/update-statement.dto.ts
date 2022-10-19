import { TransactionType, DebitOrCredit } from "@data/statement/interfaces";
import {
  IsDate,
  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Length,
} from "class-validator";

export class UpdateStatementDTO {
  @IsString()
  id: string;

  @IsOptional()
  @IsString()
  @Length(10, 10)
  accountNumber?: string;

  @IsOptional()
  @IsNumber()
  amount?: number;

  @IsOptional()
  @IsString()
  @Length(3, 3)
  currency?: string;

  @IsOptional()
  @IsEnum(TransactionType)
  debitOrCredit?: DebitOrCredit;

  @IsOptional()
  @IsString()
  narration?: string;

  @IsOptional()
  @IsString()
  referenceId?: string;

  @IsOptional()
  @IsDate()
  transactionTime?: Date;

  @IsOptional()
  @IsEnum(TransactionType)
  transactionType?: TransactionType;

  @IsOptional()
  @IsNumber()
  balanceAfter?: number;
}
