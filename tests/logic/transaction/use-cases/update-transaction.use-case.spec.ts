import { TestTransactionRepository } from "@data-layer/transaction";
import {
  UpdateTransactionRequestDTO,
  UpdateTransactionUseCase,
} from "@logic/transaction";

describe("Update Transaction Use Case Test", function () {
  const repo = new TestTransactionRepository();
  const data = "123456";
  const updatePayload: UpdateTransactionRequestDTO = {
    destinationAccountName: "findOUt",
  };

  const updateMock = jest.spyOn(repo, "update");
  updateMock.mockImplementation(async (data: string) => {
    return Promise.resolve("");
  });
  const useCase = new UpdateTransactionUseCase(repo, data, updatePayload);

  it("Should be defined", () => {
    expect(useCase).toBeDefined();
  });
  it("Should have a _transactionRepo property", () => {
    expect(useCase).toHaveProperty("_transactionRepo");
  });
  it("Should have a id property", () => {
    expect(useCase).toHaveProperty("id");
  });
  it("Should have a updateTransactionRequestDTO property", () => {
    expect(useCase).toHaveProperty("updateTransactionRequestDTO");
  });
  it("Should have an execute method", () => {
    expect(useCase.execute).toBeDefined();
  });
  it("should call _customerRepo.update with dto when execute is called", async () => {
    await useCase.execute();
    expect(updateMock).toHaveBeenCalledWith(data, updatePayload);
  });

  it("Should return a success message when execute is called", async () => {
    const res = await useCase.execute();
    expect(res).toEqual("Updated Transaction Successfully");
  });
});
