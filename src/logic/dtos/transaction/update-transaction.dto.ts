import { IsNumber, IsOptional, IsString, IsUrl, Length } from "class-validator";

export class UpdateTransactionDTO {
  @IsString()
  id: string;

  @IsOptional()
  @IsUrl()
  statusWebHook?: string | undefined;

  @IsOptional()
  @IsString()
  channel: string;

  @IsOptional()
  @IsString()
  @Length(3, 3)
  currency: string;

  @IsOptional()
  @IsString()
  destinationAccount: string;

  @IsOptional()
  @IsString()
  destinationAccountName: string;

  @IsOptional()
  @IsString()
  destinationNarration: string;

  @IsOptional()
  @IsString()
  referenceId: string;

  @IsOptional()
  @IsString()
  sourceAccout: string;

  @IsOptional()
  @IsString()
  sourceAccountName: string;

  @IsOptional()
  @IsNumber()
  sourceAmount: number;

  @IsOptional()
  @IsString()
  sourceCurrency: string;

  @IsOptional()
  @IsString()
  sourceNarration: string;
}
