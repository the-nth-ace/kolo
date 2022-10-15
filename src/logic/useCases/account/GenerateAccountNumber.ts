/**
 *
 */
/*

TODO How to generate Unique Account Numbers
 */
import { CreateAccountDTO } from "@logic/dtos/account/CreateAccountDTO";
import { AccountType } from "@data/account/interfaces/account.interface";
import { IBank } from "@data/bank/interfaces/bank.interface";
import { GenerateAccountNumberDTO } from "@logic/dtos/account/GenerateAccountNumberDTO";

export class GenerateAccountNumber {
  private bankCode: string;
  private nubanCode: string;
  protected digits: Array<number> = [
    3, 7, 3, 3, 7, 3, 3, 7, 3, 3, 7, 3, 3, 7, 3,
  ];
  protected serialNumberLength = 9;
  public constructor(generateAccountNumberDTO: GenerateAccountNumberDTO) {
    this.bankCode = generateAccountNumberDTO.bankCode;
    this.nubanCode = generateAccountNumberDTO.nubanCode.padStart(
      this.serialNumberLength,
      "0"
    );
  }

  public execute(): string {
    let cipher = this.bankCode + this.nubanCode;
    let sum = 0;

    // Step 1. Calculate A*3+B*7+C*3+D*3+E*7+F*3+G*3+H*7+I*3+J*3+K*7+L*3
    cipher.split("").forEach((item, index) => {
      sum += parseInt(item) * this.digits[index];
    });

    // Step 2: Calculate Modulo 10 of your result i.e. the remainder after dividing by 10
    sum %= 10;

    // Step 3. Subtract your result from 10 to get the Check Digit
    let checkDigit = 10 - sum;

    // Step 4. If your result is 10, then use 0 as your check digit
    checkDigit = checkDigit == 10 ? 0 : checkDigit;

    // return checkDigit;
    return "";
  }
}
