import { GenerateCheckDigitDTO } from "@logic/dtos/account/GenerateCheckDigitDTO";
/**
 * Algorithm source: https://www.cbn.gov.ng/OUT/2011/CIRCULARS/BSPD/NUBAN%20PROPOSALS%20V%200%204-%2003%2009%202010.PDF
 * The approved NUBAN format ABC-DEFGHIJKL-M where
 * ABC is the 3-digit bank code assigned by the CBN
 * DEFGHIJKL is the NUBAN Account serial number
 * M is the NUBAN Check Digit, required for account number validation
 **/
export class GenerateCheckDigitUseCase {
  private readonly bankCode: string;
  private readonly nubanSerial: string;
  protected digits: Array<number> = [
    3, 7, 3, 3, 7, 3, 3, 7, 3, 3, 7, 3, 3, 7, 3,
  ];
  constructor(generateCheckDigitDTO: GenerateCheckDigitDTO) {
    this.bankCode = generateCheckDigitDTO.bankCode;
    this.nubanSerial = generateCheckDigitDTO.nubanSerial;
  }

  public execute(): string {
    let cipher = this.bankCode + this.nubanSerial;
    let sum = 0;

    cipher.split("").forEach((item, index) => {
      sum += parseInt(item) * this.digits[index];
    });
    sum %= 10;
    let checkDigit = 10 - sum;
    return (checkDigit == 10 ? 0 : checkDigit).toString();
  }
}
