/**
 *
 */
/*

TODO How to generate Unique Account Numbers
 */
import { CreateAccountDTO } from "@logic/dtos/account/CreateAccountDTO";
import { AccountType } from "@data/account/interfaces/account.interface";

export class CreateAccountNumberUseCase {
  public execute(createAccountDTO: CreateAccountDTO) {
    let outPut = "";

    outPut.concat(createAccountDTO.branch.branchCode);
    outPut.concat(
      CreateAccountNumberUseCase.getAccountTypeCode(
        createAccountDTO.accountType
      )
    );
    outPut.concat(CreateAccountNumberUseCase.getRandomSuffixCode(2));
  }

  static getAccountTypeCode(accountType: AccountType): string {
    const accountTypeToCode: Record<AccountType, string> = {
      Savings: "101",
      Corporate: "201",
      Current: "301",
      Domiciliary: "401",
      "Fixed Deposit": "501",
      "Non Resident Nigerian": "601",
    };
    return accountTypeToCode[accountType];
  }

  static getRandomSuffixCode(length: number): string {
    let add = 1,
      max = 12 - add; // 12 is the min safe number Math.random() can generate without it starting to pad the end with zeros.

    if (length > max) {
      return (
        CreateAccountNumberUseCase.getRandomSuffixCode(max) +
        CreateAccountNumberUseCase.getRandomSuffixCode(length - max)
      );
    }

    max = Math.pow(10, length + add);
    let min = max / 10; // Math.pow(10, n) basically
    let number = Math.floor(Math.random() * (max - min + 1)) + min;

    return ("" + number).substring(0, length);
  }
}
