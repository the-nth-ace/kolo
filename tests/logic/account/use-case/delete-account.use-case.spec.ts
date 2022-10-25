import { TestAccountRepository } from "@data-layer/account/account.test.repository";
import { DeleteAccountUseCase } from "@logic/account";
import { EntityStatus } from "@data-layer/common";

describe("Find Delete Account Use Case Test", function () {
  const repo = new TestAccountRepository();
  const data = "123456";
  const updateMock = jest.spyOn(repo, "update");
  updateMock.mockImplementation(async (data: string) => {
    return Promise.resolve(null);
  });
  const useCase = new DeleteAccountUseCase(repo, data);

  it("Should be defined", () => {
    expect(useCase).toBeDefined();
  });
  it("Should have a _accountRepo property", () => {
    expect(useCase).toHaveProperty("_accountRepo");
  });
  it("Should have a id property", () => {
    expect(useCase).toHaveProperty("id");
  });
  it("Should have an execute method", () => {
    expect(useCase.execute).toBeDefined();
  });
  it("should call _customerRepo.delete with dto when execute is called", async () => {
    await useCase.execute();
    expect(updateMock).toHaveBeenCalledWith(data, {
      status: EntityStatus.INACTIVE,
    });
  });

  it("Should return null when execute is called", async () => {
    const res = await useCase.execute();
    expect(res).toEqual(null);
  });
});
