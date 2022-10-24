import { DebitOrCredit } from "../../src/data-layer/statement/interfaces";
import { BaseTransactionResponse } from "../../src/data-layer/transaction/interfaces/transaction-response.interface";
import { TransactionStatus } from "../../src/data-layer/transaction/interfaces/transaction.interface";
import { TestTransactionRepository } from "../../src/data-layer/transaction/transaction.repository";
import { CreateSingleTransactionWithinDTO } from "@logic/dtos/transaction";
import { CreateSingleTransactionWithinBankUseCase } from "@logic/useCases/transaction/create-single-transaction-within-bank.use-case";

describe("Create Single Transaction Within Bank Use Case", () => {
  const transactionRepo = new TestTransactionRepository();
  const mockCreateSingle = jest.spyOn(transactionRepo, "createSingle");

  mockCreateSingle.mockImplementation(() => {
    return new BaseTransactionResponse();
  });
  const dto: CreateSingleTransactionWithinDTO = {
    amount: 1000,
    description: "Payment for services",
    channel: "string",
    destinationCurrency: "NGN",
    destinationAccount: "string",
    destinationAccountName: "string",
    destinationNarration: "string",
    latitude: 0,
    longitude: 0,
    sourceNarration: "asdfsd",

    customer: {
      accountNumber: "{{accountNumber}}",
      firstname: "Ope",
      surname: "Adeoye",
      email: "opeadeoye@gmail.com",
      mobileNumber: "2348022221412",
      sourceAccount: "string",
      sourceAccountName: "string",
      sourceCurrency: "NGN",
    },
    status: TransactionStatus.Pending,
    statusCode: "33",
    referenceId: "33",
    debitOrCredit: DebitOrCredit.Credit,
  };
  const useCase = new CreateSingleTransactionWithinBankUseCase(
    transactionRepo,
    dto
  );
  it("should be defined", () => {
    expect(useCase).toBeDefined();
  });

  it("should have a _transactionRepo property", () => {
    expect(useCase).toHaveProperty("_transactionRepo");
  });

  it("should have a dto property", () => {
    expect(useCase).toHaveProperty("dto");
  });

  it("should have an execute method", () => {
    expect(useCase.execute).toBeDefined();
  });

  //   should call transaction repo

  it("should call createSingleWIthinRepo", () => {
    useCase.execute();
    expect(mockCreateSingle).toHaveBeenCalled();
  });

  it("execute method should return BaseTransactionResponse", () => {
    expect(useCase.execute()).toBeInstanceOf(BaseTransactionResponse);
  });
});
