import { IGenericCRUDRepository } from "../../../../data-layer/common/interfaces";
import { BaseStatementResponse } from "../../../../data-layer/statement/statement-response.interface";
import { Statement } from "../../../../data-layer/statement/statement.entity";

export class FindAllStatementUseCase {
  constructor(private _statementRepo: IGenericCRUDRepository<Statement>) {}
  execute(): BaseStatementResponse {
    return this._statementRepo.findAll();
  }
}
