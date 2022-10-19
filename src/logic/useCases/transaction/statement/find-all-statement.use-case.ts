import { IGenericCRUDRepository } from "@data/common/interfaces";
import { BaseStatementResponse } from "@data/statement/statement-response.interface";
import { Statement } from "@data/statement/statement.entity";

export class FindAllStatementUseCase {
  constructor(private _statementRepo: IGenericCRUDRepository<Statement>) {}
  execute(): BaseStatementResponse {
    return this._statementRepo.findAll();
  }
}
