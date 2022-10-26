import { FindTransactionByIdUseCase } from "@logic/transaction";
import { TestTransactionRepository } from "@data-layer/transaction";

describe("Find Transaction By ID use case", () => {
  const repo = new TestTransactionRepository();
  const findMock = jest.spyOn(repo, "findOne");
  findMock.mockImplementation(() => {
    return {};
  });
  const useCase = new FindTransactionByIdUseCase(repo, "34343");

  it("should be defined", () => {
    expect(useCase).toBeDefined();
  });

  it("should have a _transactionRepo property", () => {
    expect(useCase).toHaveProperty("_transactionRepo");
  });

  it("should have a id property", () => {
    expect(useCase).toHaveProperty("id");
  });

  it("should have have an execute method", () => {
    expect(useCase.execute).toBeDefined();
  });

  it("should call call _findOne on execute", () => {
    useCase.execute();

    expect(findMock).toHaveBeenCalled();
  });

  it("should return response", async () => {
    expect(await useCase.execute()).toStrictEqual({});
  });
});
