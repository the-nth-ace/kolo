import { GenericCRUDRepository } from "@data/common/generic-crud.repository";
import { BaseStatementResponse } from "@data/statement/statement-response.interface";
import { DeleteStatementUseCase } from "@logic/useCases/transaction/statement/delete-statement.use-case";

describe("Delete statement Use Case", () => {
  const repo = new GenericCRUDRepository();
  const dto = {
    id: "s3sdfdf",
  };
  const mockUpdate = jest.spyOn(repo, "update");
  mockUpdate.mockImplementation((dto, {}) => {
    return new BaseStatementResponse();
  });
  const useCase = new DeleteStatementUseCase(repo, dto);

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

  it("should call update on _statementRepo when execute is called", () => {
    useCase.execute();

    expect(mockUpdate).toHaveBeenCalled();
  });

  it("should return base Statement response", () => {
    expect(useCase.execute()).toBeInstanceOf(BaseStatementResponse);
  });
});
