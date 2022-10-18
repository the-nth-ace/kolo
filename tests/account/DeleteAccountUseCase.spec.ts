import { DeleteAccountUseCase } from "@logic/useCases/account";
import { AccountRepository } from "@data/account/account.repository";

describe("Delete account UseCase Test", () => {
  const acctRepo = new AccountRepository();
  const delUseC = new DeleteAccountUseCase(acctRepo);
  it("should be defined", () => {
    expect(delUseC).toBeDefined();
  });

  it("should have an execute method", () => {
    expect(delUseC.execute).toBeDefined();
  });

  it("should return null when execute is called", () => {
    expect(delUseC.execute("12344")).toEqual(null);
  });
});
