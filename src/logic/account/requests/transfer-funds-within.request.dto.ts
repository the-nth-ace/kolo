import { DebitCredit, TransactionType } from "@data-layer/transaction";
import { IsEnum, IsNumber, IsString } from "class-validator";

export class TransferFundsWithinRequestDTO {
  @IsNumber()
  amount: number;

  @IsString()
  currency: string;

  @IsEnum(DebitCredit)
  debitOrCredit: DebitCredit.DEBIT;

  @IsString()
  description: string;

  @IsString()
  destinationAccount: string;

  @IsString()
  destinationAccountName: string;

  @IsString()
  destinationCurrency: string;

  @IsString()
  destinationNarration: string;

  @IsString()
  sourceNarration: string;

  @IsEnum(TransactionType)
  transactionType: TransactionType;
}
