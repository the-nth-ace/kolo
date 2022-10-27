import { FindCustomerByBvnUseCase } from "@logic/customer/use-cases/find-customer-by-bvn-use-case";
import { TestCustomerRepository } from "@data-layer/customer/customer.test.repository";
import { CustomerStatus, CustomerType, ICustomer } from "@data-layer/customer";
import { CustomerAddressDTO, CustomerNameDTO } from "@logic/customer";

describe("Find Customer By BVN Use Case Test", function () {
  const repo = new TestCustomerRepository();
  const data = "123456";
  let address: CustomerAddressDTO = {
    city: "",
    country: "",
    postalCode: "",
    state: "",
    street: "",
  };
  let customerName: CustomerNameDTO = { firstName: "", lastName: "" };
  const respData: ICustomer = {
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
    identities: [],
    phone: "",
  };

  const findByBVNMock = jest.spyOn(repo, "findByBVN");
  findByBVNMock.mockImplementation(async (data: string) => {
    return Promise.resolve(respData);
  });
  const useCase = new FindCustomerByBvnUseCase(repo, data);

  it("Should be defined", () => {
    expect(useCase).toBeDefined();
  });
  it("Should have a _customerRepo property", () => {
    expect(useCase).toHaveProperty("_customerRepo");
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
    expect(res).toEqual(respData);
  });
});
