import { IGenericCRUDRepository } from "@data/common/interfaces";
import { BaseStatementResponse } from "@data/statement/statement-response.interface";
import { Statement } from "@data/statement/statement.entity";
import { UpdateStatementDTO } from "@logic/dtos/transaction";

export class UpdateStatementUseCase {
  constructor(
    private _statementRepo: IGenericCRUDRepository<Statement>,
    private dto: UpdateStatementDTO
  ) {}
  execute(): BaseStatementResponse {
    const id = this.dto.id;
    const payLoad: Record<any, any> = {};
    for (let dtoKey in this.dto) {
      if (dtoKey != "id") {
        payLoad[dtoKey] = this.dto[dtoKey as keyof typeof this.dto];
      }
    }
    return this._statementRepo.update(id, payLoad);
  }
}
