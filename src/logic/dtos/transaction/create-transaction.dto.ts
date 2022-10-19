import { IsNumber, IsOptional, IsString, IsUrl, Length } from "class-validator";

export class CreateTransactionDTO {
  @IsOptional()
  @IsUrl()
  statusWebHook?: string | undefined;

  @IsString()
  channel: string;

  @IsString()
  @Length(3, 3)
  currency: string;

  @IsString()
  destinationAccount: string;

  @IsString()
  destinationAccountName: string;

  @IsString()
  destinationNarration: string;

  @IsString()
  referenceId: string;

  @IsString()
  sourceAccout: string;

  @IsString()
  sourceAccountName: string;

  @IsNumber()
  sourceAmount: number;

  @IsString()
  sourceCurrency: string;

  @IsString()
  sourceNarration: string;
}
