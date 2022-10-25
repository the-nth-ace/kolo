import { DebitCredit, TransactionType } from "@data-layer/transaction";
import { IsEnum, IsNumber, IsString, Length } from "class-validator";

export class CreateTransactionWithinRequestDTO {
  @IsNumber()
  amount: number;

  @IsString()
  currency: string;

  @IsEnum(DebitCredit)
  debitOrCredit: DebitCredit;

  @IsString()
  @Length(3, 100)
  description: string;

  @IsString()
  @Length(10, 10)
  destinationAccount: string;

  @IsString()
  @Length(3, 100)
  destinationAccountName: string;

  @IsString()
  @Length(3, 3)
  destinationCurrency: string;

  @IsString()
  @Length(3, 100)
  destinationNarration: string;

  @IsString()
  sourceAccountID: string;

  @IsString()
  @Length(3, 100)
  sourceNarration: string;

  @IsEnum(TransactionType)
  transactionType: TransactionType;
}
