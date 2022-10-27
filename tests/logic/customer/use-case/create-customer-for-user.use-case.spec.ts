import "reflect-metadata";
import {
  CreateCustomerForUserUseCase,
  CreateCustomerRequestDTO,
  CustomerAddressDTO,
  CustomerNameDTO,
} from "@logic/customer";
import { CustomerType, TestCustomerRepository } from "@data-layer/customer";
import { TestUserRepository } from "@data-layer/user";

describe("Create Customer For User Use Case", () => {
  const customerRepo = new TestCustomerRepository();
  const userRepo = new TestUserRepository();

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

  const useCase = new CreateCustomerForUserUseCase(
    customerRepo,
    userRepo,
    "1234",
    data
  );

  const createMock = jest.spyOn(customerRepo, "create");
  createMock.mockImplementation((dto: any) => dto);

  const findUserMock = jest.spyOn(userRepo, "findUserById");
  findUserMock.mockImplementation((data: any) => {
    return true;
  });

  const updateUserMock = jest.spyOn(userRepo, "updateUser");
  updateUserMock.mockImplementation(() => true);

  it("Should be defined", () => {
    expect(useCase).toBeDefined();
  });

  it("Should have a _customerRepo property", () => {
    expect(useCase).toHaveProperty("_customerRepo");
  });

  it("Should have a _userRepo property", () => {
    expect(useCase).toHaveProperty("_userRepo");
  });

  it("Should have a userId property", () => {
    expect(useCase).toHaveProperty("userId");
  });

  it("Should have a dto property", () => {
    expect(useCase).toHaveProperty("dto");
  });

  it("Should call customerRepo.create when execute method is called", async () => {
    await useCase.execute();
    expect(createMock).toHaveBeenCalledWith(data);
  });

  it("Should call useRepo.update when execute method is called", async () => {
    await useCase.execute();
    expect(updateUserMock).toHaveBeenCalled();
  });

  it("Should return a success message when execute is called", async () => {
    expect(await useCase.execute()).toBe(
      "Created Customer For User Successfully"
    );
  });
});
