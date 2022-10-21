import { DebitOrCredit } from "@data/statement/interfaces";
import { BaseTransactionResponse } from "@data/transaction/interfaces/transaction-response.interface";
import { TransactionStatus } from "@data/transaction/interfaces/transaction.interface";
import { TestTransactionRepository } from "@data/transaction/transaction.repository";
import { CreateSingleTransactionOutsideDTO } from "@logic/dtos/transaction";
import { CreateMultipleTransactionOutsideUseCase } from "@logic/useCases/transaction";

describe("Create Multiple Transaction Within use case", () => {
  const repo = new TestTransactionRepository();
  const mockCreateMultiple = jest.spyOn(repo, "createMultiple");

  mockCreateMultiple.mockImplementation(() => {
    return new BaseTransactionResponse();
  });
  const data: Array<CreateSingleTransactionOutsideDTO> = [
    {
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
      destinationBankCode: "234",
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
      statusCode: "",
      referenceId: "",
      debitOrCredit: DebitOrCredit.Debit,
    },
    {
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
      destinationBankCode: "234",
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
      statusCode: "",
      referenceId: "",
      debitOrCredit: DebitOrCredit.Debit,
    },
  ];
  const useCase = new CreateMultipleTransactionOutsideUseCase(repo, data);

  it("should be defined", () => {
    expect(useCase).toBeDefined();
  });

  it("should have a _transactionrepo property", () => {
    expect(useCase).toHaveProperty("_transactionRepo");
  });

  it("should have a data property", () => {
    expect(useCase).toHaveProperty("data");
  });

  it("should have have an execute method", () => {
    expect(useCase.execute).toBeDefined();
  });

  it("should call call _createMultiple on execute", () => {
    useCase.execute();
    expect(mockCreateMultiple).toHaveBeenCalled();
  });

  it("should return response", () => {
    expect(useCase.execute()).toBeInstanceOf(BaseTransactionResponse);
  });
});
