import "reflect-metadata";
import { TestAccountRepository } from "@data-layer/account/account.test.repository";
import { CreateAccountRequestDTO, CreateAccountUseCase } from "@logic/account";
import { CustomerAddressDTO, CustomerNameDTO } from "@logic/customer";
import { CustomerStatus, CustomerType, ICustomer } from "@data-layer/customer";
import { AccountType } from "@data-layer/account/enums/account-type.enum";

describe("Create Account Use Case Test", function () {
  const repo = new TestAccountRepository();

  let address: CustomerAddressDTO = {
    city: "",
    country: "",
    postalCode: "",
    state: "",
    street: "",
  };
  let customerName: CustomerNameDTO = { firstName: "", lastName: "" };
  const customerData: ICustomer = {
    _id: "",
    numberOfAccounts: 0,
    startDateOfRelationship: new Date(),
    status: CustomerStatus.ACTIVE,
    bvn: "",
    customerAddress: address,
    customerName: customerName,
    customerType: CustomerType.INDIVIDUAL,
    dateOfBirth: new Date(),
    email: "",
    identity: [],
    phone: "",
  };

  const data: CreateAccountRequestDTO = {
    accountName: "",
    accountType: AccountType.SAVINGS,
    currency: "",
    customer: customerData,
  };

  const createMock = jest.spyOn(repo, "create");
  const findByNubanMock = jest.spyOn(repo, "findOneByNuban");
  createMock.mockImplementation((data: any) => {
    return "any";
  });

  findByNubanMock.mockImplementation((id: any) => {
    return null;
  });
  const useCase = new CreateAccountUseCase(repo, data);

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
  //
  // it("Should return a string when execute is called", async () => {
  //   const res = await useCase.execute();
  //   expect(res).toEqual("");
  // });
});
