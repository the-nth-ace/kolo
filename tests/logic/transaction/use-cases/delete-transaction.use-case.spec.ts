import { TestTransactionRepository } from "@data-layer/transaction";
import { DeleteTransactionUseCase } from "@logic/transaction";

describe("Delete Transaction Use Case Test", function () {
  const repo = new TestTransactionRepository();
  const data = "123456";
  const deleteMock = jest.spyOn(repo, "delete");
  deleteMock.mockImplementation(async (data: string) => {
    return Promise.resolve(null);
  });
  const useCase = new DeleteTransactionUseCase(repo, data);

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
  it("should call _customerRepo.delete with id when execute is called", async () => {
    await useCase.execute();
    expect(deleteMock).toHaveBeenCalledWith(data);
  });

  it("Should return null when execute is called", async () => {
    const res = await useCase.execute();
    expect(res).toEqual(null);
  });
});
