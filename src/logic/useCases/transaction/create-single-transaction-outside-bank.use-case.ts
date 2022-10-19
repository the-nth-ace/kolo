import { BaseTransactionResponse } from "@data/transaction/interfaces/transaction-response.interface";
import { ITransactionRepository } from "@data/transaction/interfaces/transaction.repository.interface";
import { CreateSingleTransactionOutsideDTO } from "@logic/dtos/transaction";

export class CreateSingleTransactionOutsideBankUseCase {
  constructor(
    private _transactionRepo: ITransactionRepository,
    private dto: CreateSingleTransactionOutsideDTO
  ) {}
  execute(): BaseTransactionResponse {
    return this._transactionRepo.createSingle(this.dto);
  }
}
