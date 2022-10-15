import { IBank } from "@data/bank/interfaces/bank.interface";
import { IsString, Length } from "class-validator";

export class GenerateAccountNumberDTO {
  @IsString()
  @Length(3, 3)
  bankCode: string;

  @IsString()
  @Length(9, 9)
  nubanCode: string;
}
