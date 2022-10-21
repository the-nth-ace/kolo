import { BaseTransactionResponse } from "@data/transaction/interfaces/transaction-response.interface";
import { TestTransactionRepository } from "@data/transaction/transaction.repository";
import { GetAllTransactionsUseCase } from "@logic/useCases/transaction";

describe("Get All transactions use case", () => {
  const repo = new TestTransactionRepository();
  const findAllMock = jest.spyOn(repo, "findAll");

  findAllMock.mockImplementation(() => {
    return new BaseTransactionResponse();
  });
  const useCase = new GetAllTransactionsUseCase(repo);

  it("should be defined", () => {
    expect(useCase).toBeDefined();
  });

  it("should have a _transactions repo", () => {
    expect(useCase).toHaveProperty("_transactionRepo");
  });

  it("should have have an execute method", () => {
    expect(useCase.execute).toBeDefined();
  });

  it("should call call repo.findAll on execute", () => {
    useCase.execute();
    expect(findAllMock).toHaveBeenCalled();
  });

  it("should return response", () => {
    expect(useCase.execute()).toBeInstanceOf(BaseTransactionResponse);
  });
});
