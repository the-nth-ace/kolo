import { IGenericCRUDRepository } from "../../../../data-layer/common/interfaces";
import { BaseStatementResponse } from "../../../../data-layer/statement/statement-response.interface";
import { Statement } from "../../../../data-layer/statement/statement.entity";
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
