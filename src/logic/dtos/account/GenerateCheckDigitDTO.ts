import { IsString, Length } from "class-validator";

export class GenerateCheckDigitDTO {
  @IsString()
  @Length(3, 3)
  bankCode: string;

  @IsString()
  @Length(9, 9)
  nubanSerial: string;
}
