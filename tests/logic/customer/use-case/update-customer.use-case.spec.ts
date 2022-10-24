import { TestCustomerRepository } from "@data-layer/customer/customer.test-repository";
import {
  CustomerAddressDTO,
  CustomerNameDTO,
  UpdateCustomerUseCase,
} from "@logic/customer";
import { CustomerStatus, CustomerType, ICustomer } from "@data-layer/customer";

describe("Find Update Customer  Use Case Test", function () {
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
    identity: [],
    phone: "",
  };

  const updateMock = jest.spyOn(repo, "update");
  updateMock.mockImplementation(async (data: string) => {
    return Promise.resolve(respData);
  });
  const useCase = new UpdateCustomerUseCase(repo, "12345", data);

  it("Should be defined", () => {
    expect(useCase).toBeDefined();
  });
  it("Should have a _customerRepo property", () => {
    expect(useCase).toHaveProperty("_customerRepo");
  });

  it("Should have a id property", () => {
    expect(useCase).toHaveProperty("id");
  });

  it("Should have an update request dto property", () => {
    expect(useCase).toHaveProperty("updateCustomerRequestDTO");
  });

  it("Should have an execute method", () => {
    expect(useCase.execute).toBeDefined();
  });

  it("should call _customerRepo.update with dto when execute is called", async () => {
    await useCase.execute();
    expect(updateMock).toHaveBeenCalledWith(data);
  });

  it("Should return a ICustomer Object when execute is called", async () => {
    const res = await useCase.execute();
    expect(res).toEqual(respData);
  });
});
