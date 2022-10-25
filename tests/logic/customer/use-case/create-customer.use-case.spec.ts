import "reflect-metadata";
import { TestCustomerRepository } from "@data-layer/customer/customer.test.repository";
import { CreateCustomerUseCase } from "@logic/customer";
import {
  CreateCustomerRequestDTO,
  CustomerAddressDTO,
  CustomerNameDTO,
} from "@logic/customer";
import { CustomerType } from "@data-layer/customer";

describe("Create Customer Use Case Test", () => {
  const repo = new TestCustomerRepository();

  const createMock = jest.spyOn(repo, "create");

  createMock.mockImplementation((dto: any) => {
    return dto;
  });

  let address: CustomerAddressDTO = {
    city: "",
    country: "",
    postalCode: "",
    state: "",
    street: "",
  };
  let customerName: CustomerNameDTO = { firstName: "", lastName: "" };
  const data: CreateCustomerRequestDTO = {
    bvn: "",
    customerAddress: address,
    customerName: customerName,
    customerType: CustomerType.INDIVIDUAL,
    dateOfBirth: new Date(),
    email: "",
    identities: [],
    phone: "",
  };

  const useCase = new CreateCustomerUseCase(repo, data);

  it("Should be defined", () => {
    expect(useCase).toBeDefined();
  });

  it("Should have a _customerRepo", () => {
    expect(useCase).toHaveProperty("_customerRepo");
  });

  it("Should have an execute method", () => {
    expect(useCase.execute).toBeDefined();
  });

  it("should call _customerRepo.create with dto when execute is called", async () => {
    await useCase.execute();
    expect(createMock).toHaveBeenCalledWith(data);
  });
  it("Should return 'Created customer successfully' when repo creates user", async () => {
    expect(await useCase.execute()).toEqual("Created customer successfully");
  });
});
