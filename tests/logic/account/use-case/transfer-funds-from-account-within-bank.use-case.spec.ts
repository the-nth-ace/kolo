import {
  DebitCredit,
  TestTransactionRepository,
  TransactionType,
} from "@data-layer/transaction";
import {
  TransferFundsFromAccountWithinBankUseCase,
  TransferFundsWithinRequestDTO,
} from "@logic/account";

describe("Transfer Funds From Account Within Bank Use Case", () => {
  const repo = new TestTransactionRepository();
  const data: string = "12345";
  const updatePayload: TransferFundsWithinRequestDTO = {
    amount: 0,
    currency: "",
    debitOrCredit: DebitCredit.DEBIT,
    description: "",
    destinationAccount: "",
    destinationAccountName: "",
    destinationCurrency: "",
    destinationNarration: "",
    sourceNarration: "",
    transactionType: TransactionType.TRANSFER,
  };
  const useCase = new TransferFundsFromAccountWithinBankUseCase(
    repo,
    data,
    updatePayload
  );

  const createSingleMock = jest.spyOn(repo, "createSingle");
  createSingleMock.mockImplementation(async (data) => {
    return Promise.resolve("");
  });
  it("Should be defined", () => {
    expect(useCase).toBeDefined();
  });

  it("Should have a _transactionRepo", () => {
    expect(useCase).toHaveProperty("_transactionRepo");
  });

  it("Should have a transferFundsFromAccountRequestDTO property", () => {
    expect(useCase).toHaveProperty("transferFundsFromAccountRequestDTO");
  });

  it("Should have an execute method", () => {
    expect(useCase.execute).toBeDefined();
  });

  it("Should have call _transactionRepo.createSingle when execute is called", async () => {
    await useCase.execute();
    expect(createSingleMock).toHaveBeenCalled();
  });

  it("Should return success message when execute is called", async () => {
    const resp = await useCase.execute();
    expect(resp).toEqual("Funds Transferred Successfully");
  });
});
