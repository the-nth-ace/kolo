import { TestTransactionRepository } from "@data-layer/transaction";
import { FindTransactionsByAccountUseCase } from "@logic/transaction";

describe("Find Transactions By Account Use Case Test", function () {
  const repo = new TestTransactionRepository();
  const data = "123456";
  const findByAccountID = jest.spyOn(repo, "findByAccountId");
  findByAccountID.mockImplementation(async (data: string) => {
    return Promise.resolve([]);
  });
  const useCase = new FindTransactionsByAccountUseCase(repo, data);

  it("Should be defined", () => {
    expect(useCase).toBeDefined();
  });
  it("Should have a _transactionRepo property", () => {
    expect(useCase).toHaveProperty("_transactionRepo");
  });
  it("Should have a id property", () => {
    expect(useCase).toHaveProperty("id");
  });
  it("Should have an execute method", () => {
    expect(useCase.execute).toBeDefined();
  });
  it("should call _transactionRepo.findByAccountId with dto when execute is called", async () => {
    await useCase.execute();
    expect(findByAccountID).toHaveBeenCalledWith(data);
  });

  it("Should return an Array  when execute is called", async () => {
    const res = await useCase.execute();
    expect(res).toStrictEqual([]);
  });
});
