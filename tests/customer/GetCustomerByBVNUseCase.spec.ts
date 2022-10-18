import { CustomerRepository } from "@data/customer";
import { BaseResponse } from "@logic/reponses/BaseResponse";
import { GetCustomerByBVNUseCase } from "@logic/useCases/customer";

describe("Get Customer By BVN Use Case", () => {
  const customerRepo = new CustomerRepository();
  const dto = {
    bvn: "asdf33411",
  };

  const useCase = new GetCustomerByBVNUseCase(customerRepo, dto);

  const mockCustomerFindByBVN = jest.spyOn(customerRepo, "findByBVN");
  mockCustomerFindByBVN.mockImplementation((bvn) => {
    return new BaseResponse();
  });

  it("should be defined", () => {
    expect(useCase).toBeDefined();
  });

  it("should have a _customerRepo property", () => {
    expect(useCase).toHaveProperty("_customerRepo");
  });

  it("should have a getCsutomerByBVNDTO", () => {
    expect(useCase).toHaveProperty("getCustomerByBVNDTO");
  });

  it("should have an execute method", () => {
    expect(useCase).toHaveProperty("execute");
  });

  it("execute method should call findByBVN method on customerRepo", () => {
    useCase.execute();
    expect(mockCustomerFindByBVN).toHaveBeenCalled();
  });
});
