import { EntityStatus } from "@data/common";
import { IGenericCRUDRepository } from "@data/common/interfaces";
import { BaseStatementResponse } from "@data/statement/statement-response.interface";
import { Statement } from "@data/statement/statement.entity";
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
