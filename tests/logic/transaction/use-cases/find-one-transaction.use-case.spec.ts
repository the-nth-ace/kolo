import { BaseTransactionResponse } from "../../src/data-layer/transaction/interfaces/transaction-response.interface";
import { TestTransactionRepository } from "../../src/data-layer/transaction/transaction.repository";
import { FindOneTransactionUseCase } from "@logic/useCases/transaction";

describe("Find One Transaction use case", () => {
  const repo = new TestTransactionRepository();
  const findMock = jest.spyOn(repo, "findOne");
  findMock.mockImplementation(() => {
    return new BaseTransactionResponse();
  });
  const useCase = new FindOneTransactionUseCase(repo, {
    id: "34343",
  });

  it("should be defined", () => {
    expect(useCase).toBeDefined();
  });

  it("should have a _transactionRepo property", () => {
    expect(useCase).toHaveProperty("_transactionRepo");
  });

  it("should have a dto property", () => {
    expect(useCase).toHaveProperty("dto");
  });

  it("should have have an execute method", () => {
    expect(useCase.execute).toBeDefined();
  });

  it("should call call _findOne on execute", () => {
    useCase.execute();

    expect(findMock).toHaveBeenCalled();
  });

  it("should return response", () => {
    expect(useCase.execute()).toBeInstanceOf(BaseTransactionResponse);
  });
});
