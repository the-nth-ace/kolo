import { GenericCRUDRepository } from "@data/common/generic-crud.repository";
import { BaseStatementResponse } from "@data/statement/statement-response.interface";
import { UpdateStatementDTO } from "@logic/dtos/transaction";
import { UpdateStatementUseCase } from "@logic/useCases/transaction/statement/update-statement.use-case";

describe("Update statement use case test", () => {
  const _statementRepo = new GenericCRUDRepository();
  const dto: UpdateStatementDTO = {
    id: "123232",
    amount: 13.5,
  };
  const useCase = new UpdateStatementUseCase(_statementRepo, dto);

  const updateMock = jest.spyOn(_statementRepo, "update");

  updateMock.mockImplementation((dto) => {
    return new BaseStatementResponse();
  });

  it("Should be defined", () => {
    expect(useCase).toBeDefined();
  });

  it("should have a _statementRepo property", () => {
    expect(useCase).toHaveProperty("_statementRepo");
  });

  it("should have a dto property", () => {
    expect(useCase).toHaveProperty("dto");
  });

  it("should have an execute method", () => {
    expect(useCase.execute).toBeDefined;
  });

  it("should call update on _statementRepo when execute is called", () => {
    useCase.execute();

    expect(updateMock).toHaveBeenCalled();
  });

  it("should return a StatementResponse", () => {
    expect(useCase.execute()).toBeInstanceOf(BaseStatementResponse);
  });
});
