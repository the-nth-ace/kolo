import {
  DebitCredit,
  TestTransactionRepository,
  TransactionType,
} from "@data-layer/transaction";
import {
  CreateMultipleTransactionWithinUseCase,
  CreateTransactionWithinRequestDTO,
} from "@logic/transaction";

describe("Create Multiple Transaction Within use case", () => {
  const repo = new TestTransactionRepository();
  const mockCreateMultiple = jest.spyOn(repo, "createMultiple");

  mockCreateMultiple.mockImplementation(() => {
    return true;
  });
  const data: CreateTransactionWithinRequestDTO[] = [
    {
      amount: 1000,
      currency: "NGN",
      transactionType: TransactionType.BILLS,
      description: "Payment for services",
      destinationCurrency: "NGN",
      destinationAccount: "string",
      destinationAccountName: "string",
      destinationNarration: "string",
      sourceNarration: "asdfsd",
      sourceAccountID: "",
      debitOrCredit: DebitCredit.DEBIT,
    },
  ];

  const useCase = new CreateMultipleTransactionWithinUseCase(repo, data);

  it("should be defined", () => {
    expect(useCase).toBeDefined();
  });

  it("should have a _transactionrepo property", () => {
    expect(useCase).toHaveProperty("_transactionRepo");
  });

  it("should have a createMultipleTransactionsWithinRequestDTO property", () => {
    expect(useCase).toHaveProperty(
      "createMultipleTransactionsWithinRequestDTO"
    );
  });

  it("should have have an execute method", () => {
    expect(useCase.execute).toBeDefined();
  });

  it("should call call _createMultiple on execute", () => {
    useCase.execute();
    expect(mockCreateMultiple).toHaveBeenCalled();
  });

  it("should return response", async () => {
    expect(await useCase.execute()).toBe("1 Transaction Created Successfully");
  });
});
