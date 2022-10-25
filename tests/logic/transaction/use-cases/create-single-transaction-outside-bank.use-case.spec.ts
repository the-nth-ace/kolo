import {
  CreateSingleTransactionOutsideUseCase,
  CreateTransactionOutsideRequestDTO,
} from "@logic/transaction";
import {
  DebitCredit,
  TestTransactionRepository,
  TransactionType,
} from "@data-layer/transaction";

describe("Create Single Transaction Outside Bank UseCase", () => {
  const transactionRepo = new TestTransactionRepository();
  const mockCreateSingle = jest.spyOn(transactionRepo, "createSingle");

  mockCreateSingle.mockImplementation(() => {
    return true;
  });
  const dto: CreateTransactionOutsideRequestDTO = {
    currency: "",
    transactionType: TransactionType.ATM,
    amount: 1000,
    description: "Payment for services",
    destinationCurrency: "NGN",
    destinationAccount: "string",
    destinationAccountName: "string",
    destinationNarration: "string",
    sourceNarration: "asdfsd",
    destinationBankCode: "234",
    sourceAccountID: "23232",
    debitOrCredit: DebitCredit.DEBIT,
  };
  const useCase = new CreateSingleTransactionOutsideUseCase(
    transactionRepo,
    dto
  );
  it("should be defined", () => {
    expect(useCase).toBeDefined();
  });

  it("should have a _transactionRepo property", () => {
    expect(useCase).toHaveProperty("_transactionRepo");
  });

  it("should have a createTransactionOutsideRequestDTO property", () => {
    expect(useCase).toHaveProperty("createTransactionOutsideRequestDTO");
  });

  it("should have an execute method", () => {
    expect(useCase.execute).toBeDefined();
  });

  //   should call transaction repo

  it("should call createSingleWithinRepo", () => {
    useCase.execute();
    expect(mockCreateSingle).toHaveBeenCalled();
  });

  it("execute method should return Transaction Created Successfully", async () => {
    expect(await useCase.execute()).toBe("Transaction Created Successfully");
  });
});
