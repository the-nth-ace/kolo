import { CustomerRepository } from "@data/customer";
import {
  CustomerIdType,
  CustomerType,
} from "@data/customer/interfaces/customer.interface";
import { CreateCustomerDTO } from "@logic/dtos/customer";
import { BaseResponse } from "@logic/reponses/BaseResponse";
import { CreateCustomerUseCase } from "@logic/useCases/customer/CreateCustomerUseCase";

describe("Create Customer Use Case Test", () => {
  const customerRepo = new CustomerRepository();

  const createMethodMock = jest.spyOn(customerRepo, "create");
  const createCustomerDTO: CreateCustomerDTO = {
    bvn: "1223456789",
    customerAddress: {
      city: "Lagos",
      country: "NGN",
      postalCode: "12345",
      state: "Lagos",
      street: "Tubosun Ojelabi Street",
    },
    customerName: {
      firstName: "Femi",
      lastName: "Olatubosun",
    },
    dateOfBirth: new Date(),
    email: "femi@efd.com",
    identity: {
      countryOfIssue: "Nigeria",
      expiryDate: new Date(),
      idNumber: "3344444",
      idType: CustomerIdType.NIN,
    },
    numberOfAccounts: 1,
    phone: "122354677",
    startDateOfRelationship: new Date(),
    type: CustomerType.INDIVIDUAL,
  };
  createMethodMock.mockImplementation(() => {
    return new BaseResponse();
  });
  const customerUseCase = new CreateCustomerUseCase(
    customerRepo,
    createCustomerDTO
  );
  it("should be defined", function () {
    expect(customerUseCase).toBeDefined();
  });
  it("should have a customerRepository", () => {
    expect(customerUseCase).toHaveProperty("_customerRepo");
  });

  it("should have an execute method", () => {
    expect(customerUseCase).toHaveProperty("execute");
  });

  it("should call create on customerRepository", () => {
    customerUseCase.execute();
    expect(customerRepo.create).toHaveBeenCalled();
  });
});
