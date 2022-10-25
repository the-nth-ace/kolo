import { TestAccountRepository } from "@data-layer/account/account.test.repository";
import { FindAccountsByBvnUseCase } from "@logic/account";

describe("Find Find Accounts By BVN  Use Case Test", function () {
  const repo = new TestAccountRepository();
  const data = "123456";

  const findByBVNMock = jest.spyOn(repo, "findByBVN");
  findByBVNMock.mockImplementation(async (data: string) => {
    return Promise.resolve([]);
  });
  const useCase = new FindAccountsByBvnUseCase(repo, data);

  it("Should be defined", () => {
    expect(useCase).toBeDefined();
  });
  it("Should have a _accountRepo property", () => {
    expect(useCase).toHaveProperty("_accountRepo");
  });
  it("Should have a bvn property", () => {
    expect(useCase).toHaveProperty("bvn");
  });
  it("Should have an execute method", () => {
    expect(useCase.execute).toBeDefined();
  });
  it("should call _customerRepo.findByBVN with dto when execute is called", async () => {
    await useCase.execute();
    expect(findByBVNMock).toHaveBeenCalledWith(data);
  });

  it("Should return a ICustomer Object when execute is called", async () => {
    const res = await useCase.execute();
    expect(res).toEqual([]);
  });
});
