import { TestAccountRepository } from "@data-layer/account/account.test.repository";
import { FindAccountByAccountNumberUseCase } from "@logic/account";

describe("Find Find Account By Account Number Use Case Test", function () {
  const repo = new TestAccountRepository();
  const data = "123456";

  const findOneByAcctNumberMock = jest.spyOn(repo, "findOneByAccountNumber");
  findOneByAcctNumberMock.mockImplementation(async (data: string) => {
    return Promise.resolve("");
  });
  const useCase = new FindAccountByAccountNumberUseCase(repo, data);

  it("Should be defined", () => {
    expect(useCase).toBeDefined();
  });
  it("Should have a _accountRepo property", () => {
    expect(useCase).toHaveProperty("_accountRepo");
  });
  it("Should have a accountNumber property", () => {
    expect(useCase).toHaveProperty("accountNumber");
  });
  it("Should have an execute method", () => {
    expect(useCase.execute).toBeDefined();
  });
  it("should call _customerRepo.findOneByAccountNumber with data when execute is called", async () => {
    await useCase.execute();
    expect(findOneByAcctNumberMock).toHaveBeenCalledWith(data);
  });

  it("Should return a ICustomer Object when execute is called", async () => {
    const res = await useCase.execute();
    expect(res).toEqual("");
  });
});
