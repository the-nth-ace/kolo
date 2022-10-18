import { CustomerRepository } from "@data/customer";
import { UpdateCustomerDTO } from "@logic/dtos/customer";
import { BaseResponse } from "@logic/reponses/BaseResponse";
import { UpdateCustomerUseCase } from "@logic/useCases/customer";

describe("Update CustomerUseCase", () => {
  const customerRepo = new CustomerRepository();
  const updateCustomerDTO: UpdateCustomerDTO = {};
  const updateCustomerUseCase = new UpdateCustomerUseCase(
    customerRepo,
    updateCustomerDTO
  );

  const mockCustomerRepoUpdate = jest.spyOn(customerRepo, "update");
  mockCustomerRepoUpdate.mockImplementation((updateCustomerDTO) => {
    return new BaseResponse();
  });

  it("should be defined", () => {
    expect(updateCustomerUseCase).toBeDefined();
  });

  it("should have _customerRepository", () => {
    expect(updateCustomerUseCase).toHaveProperty("_customerRepository");
  });

  it("should have updateCustomerDTO", () => {
    expect(updateCustomerUseCase).toHaveProperty("updateCustomerDTO");
  });

  it("should have an execute method", () => {
    expect(updateCustomerUseCase).toHaveProperty("execute");
  });

  it("should call update on customer Repository", () => {
    updateCustomerUseCase.execute();
    expect(customerRepo.update).toHaveBeenCalled();
  });
});
