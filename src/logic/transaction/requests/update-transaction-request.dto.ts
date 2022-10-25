import { DebitCredit, TransactionType } from "@data-layer/transaction";
import {
  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Length,
} from "class-validator";

export class UpdateTransactionRequestDTO {
  @IsOptional()
  @IsNumber()
  amount: number;

  @IsOptional()
  @IsString()
  currency: string;

  @IsOptional()
  @IsEnum(DebitCredit)
  debitOrCredit: DebitCredit;

  @IsOptional()
  @IsString()
  @Length(3, 100)
  description: string;

  @IsOptional()
  @IsString()
  @Length(10, 10)
  destinationAccount: string;

  @IsOptional()
  @IsString()
  @Length(3, 100)
  destinationAccountName: string;

  @IsOptional()
  @IsString()
  @Length(3, 3)
  destinationBankCode: string;

  @IsOptional()
  @IsString()
  @Length(3, 3)
  destinationCurrency: string;

  @IsOptional()
  @IsString()
  @Length(3, 100)
  destinationNarration: string;

  @IsOptional()
  @IsString()
  sourceAccountID: string;

  @IsOptional()
  @IsString()
  @Length(3, 100)
  sourceNarration: string;

  @IsOptional()
  @IsEnum(TransactionType)
  transactionType: TransactionType;
}
