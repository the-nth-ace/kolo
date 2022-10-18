import { CreateCustomerUseCase } from "@logic/useCases/customer/CreateCustomerUseCase";

describe("Create Customer Use Case Test", () => {
  const constumerUseCase = new CreateCustomerUseCase();
  it("should be defined", function () {
    expect(constumerUseCase).toBeDefined();
  });
});
