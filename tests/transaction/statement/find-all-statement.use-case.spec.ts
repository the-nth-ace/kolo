import { GenericCRUDRepository } from "../../../src/data-layer/common/generic-crud.repository";
import { BaseStatementResponse } from "../../../src/data-layer/statement/statement-response.interface";
import { FindAllStatementUseCase } from "@logic/useCases/transaction/statement/find-all-statement.use-case";

describe("Find One Statement Use Case", () => {
  const repo = new GenericCRUDRepository();
  const useCase = new FindAllStatementUseCase(repo);

  const findMock = jest.spyOn(repo, "findAll");

  findMock.mockImplementation(() => {
    return new BaseStatementResponse();
  });

  it("should be defined", () => {
    expect(useCase).toBeDefined();
  });

  it("should have a _statementRepo property", () => {
    expect(useCase).toHaveProperty("_statementRepo");
  });

  it("should have an execute method", () => {
    expect(useCase.execute).toBeDefined;
  });

  it("should call findAll on _statementRepo when execute is called", () => {
    useCase.execute();

    expect(findMock).toHaveBeenCalled();
  });

  it("should return a StatementResponse", () => {
    expect(useCase.execute()).toBeInstanceOf(BaseStatementResponse);
  });
});
