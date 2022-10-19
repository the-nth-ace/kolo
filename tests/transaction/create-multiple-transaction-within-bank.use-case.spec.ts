import { BaseTransactionResponse } from "@data/transaction/interfaces/transaction-response.interface";
import { TransactionRepository } from "@data/transaction/transaction.repository";
import { CreateMultipleTransactionWithinUseCase } from "@logic/useCases/transaction";

describe("Create Multiple Transaction Within use case", () => {
  const repo = new TransactionRepository();
  const mockCreateMultiple = jest.spyOn(repo, "createMultiple");

  mockCreateMultiple.mockImplementation(() => {
    return new BaseTransactionResponse();
  });
  const data = [
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
    },
  ];
  const useCase = new CreateMultipleTransactionWithinUseCase(repo, data);

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
