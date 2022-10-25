import {
  CreateSingleTransactionWithinUseCase,
  CreateTransactionWithinRequestDTO,
} from "@logic/transaction";
import {
  DebitCredit,
  TestTransactionRepository,
  TransactionType,
} from "@data-layer/transaction";

describe("Create Single Transaction Within Bank UseCase", () => {
  const transactionRepo = new TestTransactionRepository();
  const mockCreateSingle = jest.spyOn(transactionRepo, "createSingle");

  mockCreateSingle.mockImplementation(() => {
    return true;
  });
  const dto: CreateTransactionWithinRequestDTO = {
    currency: "",
    transactionType: TransactionType.ATM,
    amount: 1000,
    description: "Payment for services",
    destinationCurrency: "NGN",
    destinationAccount: "string",
    destinationAccountName: "string",
    destinationNarration: "string",
    sourceNarration: "asdfsd",
    sourceAccountID: "23232",
    debitOrCredit: DebitCredit.DEBIT,
  };
  const useCase = new CreateSingleTransactionWithinUseCase(
    transactionRepo,
    dto
  );
  it("should be defined", () => {
    expect(useCase).toBeDefined();
  });

  it("should have a _transactionRepo property", () => {
    expect(useCase).toHaveProperty("_transactionRepo");
  });

  it("should have a createTransactionWithinRequestDTO property", () => {
    expect(useCase).toHaveProperty("createTransactionWithinRequestDTO");
  });

  it("should have an execute method", () => {
    expect(useCase.execute).toBeDefined();
  });

  it("should call transactionRepo", () => {
    useCase.execute();
    expect(mockCreateSingle).toHaveBeenCalled();
  });

  it("execute method should return Transaction Created Successfully", async () => {
    expect(await useCase.execute()).toBe("Transaction Created Successfully");
  });
});
