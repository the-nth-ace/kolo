import {
  DebitOrCredit,
  IStatement,
  TransactionType,
} from "@data/statement/interfaces";
import { IsDate, IsEnum, IsNumber, IsString, Length } from "class-validator";

export class CreateStatementDTO {
  @IsString()
  @Length(10, 10)
  accountNumber: string;

  @IsNumber()
  amount: number;

  @IsString()
  @Length(3, 3)
  currency: string;

  @IsEnum(TransactionType)
  debitOrCredit: DebitOrCredit;

  @IsString()
  narration: string;

  @IsString()
  referenceId: string;

  @IsDate()
  transactionTime: Date;

  @IsEnum(TransactionType)
  transactionType: TransactionType;

  @IsDate()
  valueDate: Date;

  @IsNumber()
  balanceAfter: number;
}
