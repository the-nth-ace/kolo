import { CustomerRepository } from "@data/customer";
import { BaseResponse } from "@logic/reponses/BaseResponse";
import { GetCustomerByIdUseCase } from "@logic/useCases/customer";

describe("Get Customer By Id Use Case", () => {
  const customerRepo = new CustomerRepository();
  const dto = {
    id: "asdf33411",
  };

  const mockCustomerFindByID = jest.spyOn(customerRepo, "findById");
  mockCustomerFindByID.mockImplementation((id) => {
    return new BaseResponse();
  });

  const useCase = new GetCustomerByIdUseCase(customerRepo, dto);
  it("should be defined", () => {
    expect(useCase).toBeDefined();
  });

  it("should have a _customerRepo property", () => {
    expect(useCase).toHaveProperty("_customerRepo");
  });

  it("should have a getCsutomerByIdDTO", () => {
    expect(useCase).toHaveProperty("getCustomerByIdDTO");
  });

  it("should have an execute method", () => {
    expect(useCase).toHaveProperty("execute");
  });

  it("execute method should call findById method on customerRepo", () => {
    useCase.execute();
    expect(mockCustomerFindByID).toHaveBeenCalled();
  });
});
