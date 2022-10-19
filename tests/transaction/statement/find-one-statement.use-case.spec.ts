import { GenericCRUDRepository } from "@data/common/generic-crud.repository";
import { BaseStatementResponse } from "@data/statement/statement-response.interface";
import { FindOneStatementUseCase } from "@logic/useCases/transaction/statement/find-one-statement.use-case";

describe("Find One Statement UseCase", () => {
  const repo = new GenericCRUDRepository();
  const dto = {
    id: "1223445",
  };
  const findById = jest.spyOn(repo, "findById");

  findById.mockImplementation((dto) => {
    return new BaseStatementResponse();
  });
  const useCase = new FindOneStatementUseCase(repo, dto);

  it("should be defined", () => {
    expect(useCase).toBeDefined();
  });

  it("should have a _statementRepo property", () => {
    expect(useCase).toHaveProperty("_statementRepo");
  });

  it("should have a dto property", () => {
    expect(useCase).toHaveProperty("dto");
  });

  it("should have an execute method", () => {
    expect(useCase.execute).toBeDefined();
  });

  it("should call findById on _statement Repo when execute is called", () => {
    useCase.execute();
    expect(findById).toHaveBeenCalled();
  });

  it("should return Base Statement Response", () => {
    expect(useCase.execute()).toBeInstanceOf(BaseStatementResponse);
  });
});
