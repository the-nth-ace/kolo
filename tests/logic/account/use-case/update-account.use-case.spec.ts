import { EntityStatus } from "@data-layer/common";
import { TestAccountRepository } from "@data-layer/account/account.test.repository";
import { UpdateAccountUseCase } from "@logic/account";

describe("Update Account Use Case Test", function () {
  const repo = new TestAccountRepository();
  const data = "123456";
  const payload: any = {
    status: EntityStatus.ACTIVE,
  };
  const updateMock = jest.spyOn(repo, "update");
  updateMock.mockImplementation(async (data: string, payload: any) => {
    return Promise.resolve("");
  });
  const useCase = new UpdateAccountUseCase(repo, data, payload);

  it("Should be defined", () => {
    expect(useCase).toBeDefined();
  });
  it("Should have a _accountRepo property", () => {
    expect(useCase).toHaveProperty("_accountRepo");
  });
  it("Should have a id property", () => {
    expect(useCase).toHaveProperty("id");
  });
  it("Should have an updateAccountRequestDTO property", () => {
    expect(useCase).toHaveProperty("updateAccountRequestDTO");
  });
  it("Should have an execute method", () => {
    expect(useCase.execute).toBeDefined();
  });
  it("should call _customerRepo.update with dto when execute is called", async () => {
    await useCase.execute();
    expect(updateMock).toHaveBeenCalledWith(data, payload);
  });

  it("Should return a ICustomer Object when execute is called", async () => {
    const res = await useCase.execute();
    expect(res).toEqual("");
  });
});
