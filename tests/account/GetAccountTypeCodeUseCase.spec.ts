import { GetAccountTypeCodeUseCase } from "@logic/useCases/account";
import { AccountType } from "@data/account/interfaces/account.interface";

describe("GetAccountTypeCodeUseCase Test", () => {
  const acctypu = new GetAccountTypeCodeUseCase();
  it("should return the appropriate Account type Code", () => {
    expect(acctypu.execute(AccountType.SAVINGS)).toEqual("101");
    expect(acctypu.execute(AccountType.CORPORATE)).toEqual("201");
  });
});
