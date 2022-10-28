import { IGenericCRUDRepository } from "../../data-layer/common/interfaces";
import { BaseStatementResponse } from "../../../../data-layer/statement/statement-response.interface";
import { Statement } from "../../../../data-layer/statement/statement.entity";
import { CreateStatementDTO } from "@logic/dtos/transaction/statement/create-statement.dto";

export class CreateStatementUseCase {
  constructor(
    private _statementRepo: IGenericCRUDRepository<Statement>,
    private dto: CreateStatementDTO
  ) {}

  execute(): BaseStatementResponse {
    return this._statementRepo.create(this.dto);
  }
}
