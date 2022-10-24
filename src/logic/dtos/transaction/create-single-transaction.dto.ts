import { DebitOrCredit } from "../../../data-layer/statement/interfaces";
import {
  ITransactionSourceCustomer,
  TransactionStatus,
} from "../../../data-layer/transaction/interfaces/transaction.interface";
import {
  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  IsUrl,
  Length,
} from "class-validator";

export class CreateSingleTransactionOutsideDTO {
  @IsNumber()
  amount: number;

  @IsString()
  description: string;

  @IsString()
  @Length(3, 3)
  destinationCurrency: string;

  @IsString()
  @Length(3, 3)
  destinationBankCode: string;

  @IsOptional()
  @IsNumber()
  latitude?: number | undefined;

  @IsOptional()
  @IsNumber()
  longitude?: number | undefined;

  @IsOptional()
  @IsUrl()
  statusWebHook?: string | undefined;

  @IsString()
  channel: string;

  @IsString()
  destinationAccount: string;

  @IsString()
  destinationAccountName: string;

  @IsString()
  destinationNarration: string;

  @IsString()
  sourceNarration: string;

  @IsOptional()
  @IsNumber()
  customer: TransactionSourceCustomerDTO;

  @IsEnum(TransactionStatus)
  status: TransactionStatus;

  @IsString()
  statusCode: string;

  @IsString()
  referenceId: string;

  @IsString()
  debitOrCredit: DebitOrCredit;
}

export class CreateSingleTransactionWithinDTO {
  @IsNumber()
  amount: number;

  @IsString()
  description: string;

  @IsString()
  destinationCurrency: string;

  @IsOptional()
  @IsNumber()
  latitude?: number | undefined;

  @IsOptional()
  @IsNumber()
  longitude?: number | undefined;

  @IsOptional()
  @IsUrl()
  statusWebHook?: string | undefined;

  @IsString()
  channel: string;

  @IsString()
  destinationAccount: string;

  @IsString()
  destinationAccountName: string;

  @IsString()
  destinationNarration: string;

  @IsString()
  sourceNarration: string;

  @IsOptional()
  @IsNumber()
  customer: TransactionSourceCustomerDTO;

  @IsEnum(TransactionStatus)
  status: TransactionStatus;

  @IsString()
  statusCode: string;

  @IsString()
  referenceId: string;

  @IsString()
  debitOrCredit: DebitOrCredit;
}

class TransactionSourceCustomerDTO implements ITransactionSourceCustomer {
  @IsString()
  accountNumber: string;

  @IsString()
  firstname: string;

  @IsString()
  surname: string;

  @IsString()
  email: string;

  @IsString()
  mobileNumber: string;

  @IsString()
  sourceAccount: string;

  @IsString()
  sourceAccountName: string;

  @IsString()
  sourceCurrency: string;
}
