import { EntityStatus } from "../../data-layer/common";
import { IGenericCRUDRepository } from "../../data-layer/common/interfaces";
import { BaseStatementResponse } from "../../../../data-layer/statement/statement-response.interface";
import { Statement } from "../../../../data-layer/statement/statement.entity";
import { DeleteStatementDTO } from "@logic/dtos/transaction/statement/delete-statement.dto";

export class DeleteStatementUseCase {
  constructor(
    private _statementRepo: IGenericCRUDRepository<Statement>,
    private dto: DeleteStatementDTO
  ) {}
  execute(): BaseStatementResponse {
    const id = this.dto.id;
    const payLoad: Record<any, any> = {
      status: EntityStatus.INACTIVE,
    };

    return this._statementRepo.update(id, payLoad);
  }
}
