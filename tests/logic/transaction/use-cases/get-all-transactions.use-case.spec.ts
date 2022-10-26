import { FindAllTransactionsUseCase } from "@logic/transaction";
import { TestTransactionRepository } from "@data-layer/transaction";

describe("Get All transactions use case", () => {
  const repo = new TestTransactionRepository();
  const findAllMock = jest.spyOn(repo, "findAll");

  findAllMock.mockImplementation(async () => {
    return Promise.resolve([]);
  });
  const useCase = new FindAllTransactionsUseCase(repo);

  it("should be defined", () => {
    expect(useCase).toBeDefined();
  });

  it("should have a _transactionRepo property", () => {
    expect(useCase).toHaveProperty("_transactionRepo");
  });

  it("should have have an execute method", () => {
    expect(useCase.execute).toBeDefined();
  });

  it("should call call repo.findAll on execute", () => {
    useCase.execute();
    expect(findAllMock).toHaveBeenCalled();
  });

  it("should return an array", async () => {
    expect(await useCase.execute()).toStrictEqual([]);
  });
});
