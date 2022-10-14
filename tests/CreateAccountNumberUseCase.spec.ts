import { CreateAccountNumberUseCase } from "@logic/useCases/CreateAccountNumberUseCase";
import { AccountType } from "@data/account/interfaces/account.interface";

describe("AccountNumberGenerateUseCase Test", () => {
  it("should return the appropriate Account type Code", () => {
    expect(
      CreateAccountNumberUseCase.getAccountTypeCode(AccountType.SAVINGS)
    ).toBe("101");
  });

  it("should generate number string of length n", () => {
    expect(CreateAccountNumberUseCase.getRandomSuffixCode(6).length).toBe(6);
  });
});
