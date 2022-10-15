import { AccountType } from "@data/account/interfaces/account.interface";

export class GetAccountTypeCodeUseCase {
  private accountTypeToCode: Record<AccountType, string> = {
    Savings: "101",
    Corporate: "201",
    Current: "301",
    Domiciliary: "401",
    "Fixed Deposit": "501",
    "Non Resident Nigerian": "601",
  };
  public execute(accountType: AccountType): string {
    return this.accountTypeToCode[accountType];
  }
}
