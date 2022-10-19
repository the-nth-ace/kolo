import { BaseTransactionResponse } from "@data/transaction/interfaces/transaction-response.interface";
import { CreateSingleTransactionWithinBankUseCase } from "@logic/useCases/transaction/create-single-transaction-within-bank.use-case";

describe("Create Single Transaction Within Bank Use Case", () => {
  const useCase = new CreateSingleTransactionWithinBankUseCase();
  it("should be defined", () => {
    expect(useCase).toBeDefined();
  });

  it("should have a _transactionRepo property", () => {
    expect(useCase).toHaveProperty("_transactionRepo");
  });

  it("should have a dto property", () => {
    expect(useCase).toHaveProperty("dto");
  });

  it("should have an execute method", () => {
    expect(useCase.execute).toBeDefined();
  });

  //   should call transaction repo

  it("execute method should return BaseTransactionResponse", () => {
    expect(useCase.execute()).toBeInstanceOf(BaseTransactionResponse);
  });
});
