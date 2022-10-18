import { EntityStatus } from "@data/common";
import { CustomerRepository } from "@data/customer";
import { BaseResponse } from "@logic/reponses/BaseResponse";
import { DeleteCustomerUseCase } from "@logic/useCases/customer";

describe("Delete Customer Use Case", () => {
  const customerRepo = new CustomerRepository();
  const deleteCustomerDTO = {
    id: "sdfsdfdf23",
  };
  const useCase = new DeleteCustomerUseCase(customerRepo, deleteCustomerDTO);

  const customerRepoUpdateMock = jest.spyOn(customerRepo, "update");

  customerRepoUpdateMock.mockImplementation(
    (updateCustomerDTO) => new BaseResponse()
  );

  it("should be defined", () => {
    expect(useCase).toBeDefined();
  });

  it("should have an account repository", () => {
    expect(useCase).toHaveProperty("_customerRepository");
  });

  it("should have a delete CustomerDTO", () => {
    expect(useCase).toHaveProperty("deleteCustomerDTO");
  });

  it("should have an execute method", () => {
    expect(useCase).toHaveProperty("execute");
  });

  it("should call update on customer Repository", () => {
    useCase.execute();

    expect(customerRepoUpdateMock).toHaveBeenCalledWith({
      ...deleteCustomerDTO,
      status: EntityStatus.INACTIVE,
    });
  });
});
