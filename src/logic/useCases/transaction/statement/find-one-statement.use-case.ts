import { IGenericCRUDRepository } from "@data/common/interfaces";
import { BaseStatementResponse } from "@data/statement/statement-response.interface";
import { Statement } from "@data/statement/statement.entity";
import { GetResourceByIdDTO } from "@logic/dtos";

export class FindOneStatementUseCase {
  constructor(
    private _statementRepo: IGenericCRUDRepository<Statement>,
    private dto: GetResourceByIdDTO
  ) {}
  execute(): BaseStatementResponse {
    return this._statementRepo.findById(this.dto.id);
  }
}
