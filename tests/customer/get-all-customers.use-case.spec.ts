import { CustomerRepository } from "@data/customer";
import { BaseCustomerResponse } from "@data/customer/interfaces";
import { BaseResponse } from "@logic/reponses/BaseResponse";
import { GetAllCustomerUseCase } from "@logic/useCases/customer/get-all-customers.use-case";

describe("Get all Customer Use Case", () => {
  const customerRepo = new CustomerRepository();
  const findAllMock = jest.spyOn(customerRepo, "findAll");

  findAllMock.mockImplementation(() => new BaseCustomerResponse());
  const useCase = new GetAllCustomerUseCase(customerRepo);
  it("should be defined", () => {
    expect(useCase).toBeDefined();
  });

  it("should have a _customerRepo property", () => {
    expect(useCase).toHaveProperty("_customerRepo");
  });

  it("should have an execute method", () => {
    expect(useCase.execute).toBeDefined;
  });

  it("should call findAll on _customerRepo when execute is called", () => {
    useCase.execute();
    expect(findAllMock).toHaveBeenCalled();
  });
});
