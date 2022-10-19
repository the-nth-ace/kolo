import { GenericCRUDRepository } from "@data/common/generic-crud.repository";
import { DebitOrCredit, TransactionType } from "@data/statement/interfaces";
import { BaseStatementResponse } from "@data/statement/statement-response.interface";
import { CreateStatementDTO } from "@logic/dtos/transaction/create-statement.dto";
import { BaseResponse } from "@logic/reponses/BaseResponse";
import { CreateStatementUseCase } from "@logic/useCases/transaction/statement/create-statement.use-case";

describe("Create Statement Use Case Test", () => {
  const statementRepo = new GenericCRUDRepository();
  const createMock = jest.spyOn(statementRepo, "create");

  const dto: CreateStatementDTO = {
    accountNumber: "1234567789",
    amount: 12244.5,
    currency: "NGN",
    debitOrCredit: DebitOrCredit.Credit,
    narration: "Sike bro",
    referenceId: "343343",
    transactionTime: new Date(),
    transactionType: TransactionType.CASHWITHDRAWAL,
    valueDate: new Date(),
    balanceAfter: 9222.1,
  };
  createMock.mockImplementation((dto) => {
    return new BaseStatementResponse();
  });
  const useCase = new CreateStatementUseCase(statementRepo, dto);
  it("should be defined", () => {
    expect(useCase).toBeDefined();
  });

  it("should have _statementRepo property", () => {
    expect(useCase).toHaveProperty("_statementRepo");
  });

  it("should have a dto property", () => {
    expect(useCase).toHaveProperty("dto");
  });

  it("should have an execute method", () => {
    expect(useCase.execute).toBeDefined();
  });
  it("should call create on _statementRepo", () => {
    useCase.execute();
    expect(useCase.execute()).toBeInstanceOf(BaseStatementResponse);
    expect(createMock).toHaveBeenCalled();
  });
});
