import { UpdateAccountUseCase } from "@logic/useCases/account";
import { AccountRepository } from "@data/account/account.repository";

describe("Update Account UseCase", function () {
  const repo = new AccountRepository();
  const upAccUse = new UpdateAccountUseCase(repo, {
    accountId: "12343",
    accountName: "Femi",
  });

  const repoMock = jest.spyOn(repo, "update");

  repoMock.mockReturnValue(true);

  it("should be defined", function () {
    expect(upAccUse).toBeDefined();
  });

  it("should have an execute method", () => {
    expect(upAccUse.execute).toBeDefined();
  });

  it("should have an accountRepo property", () => {
    expect(upAccUse).toHaveProperty("accountRepo");
  });

  it("should return true when execute is called", () => {
    expect(upAccUse.execute()).toEqual(true);
  });

  it("should return false when repo returns false", () => {
    repoMock.mockReturnValue(false);
    expect(upAccUse.execute()).toEqual(false);
  });
});
