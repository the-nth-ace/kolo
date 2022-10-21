import { DebitOrCredit } from "@data/statement/interfaces";
import { BaseTransactionResponse } from "@data/transaction/interfaces/transaction-response.interface";
import { TransactionStatus } from "@data/transaction/interfaces/transaction.interface";
import { TestTransactionRepository } from "@data/transaction/transaction.repository";
import { CreateSingleTransactionOutsideDTO } from "@logic/dtos/transaction";
import { CreateSingleTransactionOutsideBankUseCase } from "@logic/useCases/transaction";

describe("CreateSingleTransactionOutsideBankUseCase", () => {
  const transactionRepo = new TestTransactionRepository();
  const mockCreateSingle = jest.spyOn(transactionRepo, "createSingle");

  mockCreateSingle.mockImplementation(() => {
    return new BaseTransactionResponse();
  });
  const dto: CreateSingleTransactionOutsideDTO = {
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
  };
  const useCase = new CreateSingleTransactionOutsideBankUseCase(
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
