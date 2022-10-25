import { TestAccountRepository } from "@data-layer/account/account.test.repository";
import { FindAllAccountsUseCase } from "@logic/account";

describe("Find All Accounts Use Case Test", function () {
  const repo = new TestAccountRepository();

  const findAllMock = jest.spyOn(repo, "findAll");
  findAllMock.mockImplementation(async () => {
    return Promise.resolve([]);
  });
  const useCase = new FindAllAccountsUseCase(repo);

  it("Should be defined", () => {
    expect(useCase).toBeDefined();
  });
  it("Should have a _accountRepo property", () => {
    expect(useCase).toHaveProperty("_accountRepo");
  });

  it("Should have an execute method", () => {
    expect(useCase.execute).toBeDefined();
  });
  it("should call _customerRepo.findById with dto when execute is called", async () => {
    await useCase.execute();
    expect(findAllMock).toHaveBeenCalled();
  });

  it("Should return an Array when execute is called", async () => {
    const res = await useCase.execute();
    expect(res).toEqual([]);
  });
});
