import "reflect-metadata";
import { TestAccountRepository } from "@data-layer/account/account.test.repository";
import { CreateAccountRequestDTO, CreateAccountUseCase } from "@logic/account";
import { AccountType } from "@data-layer/account/enums/account-type.enum";
import { TestCustomerRepository } from "@data-layer/customer";

describe("Create Account Use Case Test", function () {
  const repo = new TestAccountRepository();
  const customerRepo = new TestCustomerRepository();

  const data: CreateAccountRequestDTO = {
    accountName: "",
    accountType: AccountType.SAVINGS,
    currency: "",
    customerId: "customerData",
  };

  const createMock = jest.spyOn(repo, "create");
  const findByNubanMock = jest.spyOn(repo, "findOneByNuban");
  createMock.mockImplementation((data: any) => {
    return "any";
  });

  const customerRepoMOck = jest.spyOn(customerRepo, "findById");
  customerRepoMOck.mockImplementation(async (id: string) => {
    Promise.resolve(true);
  });

  findByNubanMock.mockImplementation((id: any) => {
    return null;
  });
  const useCase = new CreateAccountUseCase(repo, customerRepo, data);

  it("Should be defined", () => {
    expect(useCase).toBeDefined();
  });
  it("Should have a _accountRepo property", () => {
    expect(useCase).toHaveProperty("_accountRepo");
  });
  it("Should have a createAccountRequestDTO property", () => {
    expect(useCase).toHaveProperty("createAccountRequestDTO");
  });
  it("Should have an execute method", () => {
    expect(useCase.execute).toBeDefined();
  });
  it("should call _accountRepo.create with dto when execute is called", async () => {
    await useCase.execute();
    expect(createMock).toHaveBeenCalled();
  });
});
