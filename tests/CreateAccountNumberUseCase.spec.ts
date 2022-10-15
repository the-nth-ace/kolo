import { GenerateAccountNumber } from "@logic/useCases/account/GenerateAccountNumber";
import { AccountType } from "@data/account/interfaces/account.interface";

describe("AccountNumberGenerateUseCase Test", () => {
  it("should return the appropriate Account type Code", () => {
    expect(GenerateAccountNumber.getAccountTypeCode(AccountType.SAVINGS)).toBe(
      "101"
    );
  });

  it("should generate number string of length n", () => {
    expect(GenerateAccountNumber.getRandomSuffixCode(6).length).toBe(6);
  });
});
