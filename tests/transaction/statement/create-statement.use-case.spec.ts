import { CreateStatementUseCase } from "@logic/useCases/transaction/statement/create-statement.use-case";

describe("Create Statement Use Case Test", () => {
  const useCase = new CreateStatementUseCase();
  it("should be defined", () => {
    expect(useCase).toBeDefined();
  });
});
