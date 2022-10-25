import "reflect-metadata";
import { TestCustomerRepository } from "@data-layer/customer/customer.test.repository";
import { FindAllCustomersUseCase } from "@logic/customer";

describe("Find All Customers Use Case Test", function () {
  const repo = new TestCustomerRepository();
  const respData: any = [];

  const findAllMock = jest.spyOn(repo, "findAll");
  findAllMock.mockImplementation(async () => {
    return Promise.resolve(respData);
  });
  const useCase = new FindAllCustomersUseCase(repo);

  it("Should be defined", () => {
    expect(useCase).toBeDefined();
  });
  it("Should have a _customerRepo property", () => {
    expect(useCase).toHaveProperty("_customerRepo");
  });

  it("Should have an execute method", () => {
    expect(useCase.execute).toBeDefined();
  });
  it("should call _customerRepo.findByBVN with dto when execute is called", async () => {
    await useCase.execute();
    expect(findAllMock).toHaveBeenCalled();
  });

  it("Should return a ICustomer Object when execute is called", async () => {
    const res = await useCase.execute();
    expect(res).toEqual(respData);
  });
});
