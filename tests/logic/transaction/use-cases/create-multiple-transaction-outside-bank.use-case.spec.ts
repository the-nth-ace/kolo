import {
  CreateMultipleTransactionOutsideUseCase,
  CreateTransactionOutsideRequestDTO,
} from "@logic/transaction";
import {
  DebitCredit,
  TestTransactionRepository,
  TransactionType,
} from "@data-layer/transaction";

describe("Create Multiple Transaction Outside use case", () => {
  const repo = new TestTransactionRepository();
  const mockCreateMultiple = jest.spyOn(repo, "createMultiple");

  mockCreateMultiple.mockImplementation(
    (dto: CreateTransactionOutsideRequestDTO[]) => {
      return true;
    }
  );
  const data: Array<CreateTransactionOutsideRequestDTO> = [
    {
      amount: 1000,
      currency: "NGN",
      transactionType: TransactionType.BILLS,
      description: "Payment for services",
      destinationCurrency: "NGN",
      destinationAccount: "string",
      destinationAccountName: "string",
      destinationNarration: "string",
      destinationBankCode: "123",
      sourceNarration: "asdfsd",
      sourceAccountID: "",
      debitOrCredit: DebitCredit.DEBIT,
    },
  ];
  const useCase = new CreateMultipleTransactionOutsideUseCase(repo, data);

  it("should be defined", () => {
    expect(useCase).toBeDefined();
  });

  it("should have a _transactionrepo property", () => {
    expect(useCase).toHaveProperty("_transactionRepo");
  });

  it("should have a createMultipleTransactionsOutsideDTO property", () => {
    expect(useCase).toHaveProperty("createMultipleTransactionsOutsideDTO");
  });

  it("should have have an execute method", () => {
    expect(useCase.execute).toBeDefined();
  });

  it("should call call _createMultiple on execute", () => {
    useCase.execute();
    expect(mockCreateMultiple).toHaveBeenCalledWith(data);
  });

  it("should return string response", async () => {
    expect(await useCase.execute()).toBe("1 Transaction Created Successfully");
  });
});
