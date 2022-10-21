import { BaseTransactionResponse } from "@data/transaction/interfaces/transaction-response.interface";
import { ITransactionRepository } from "@data/transaction/interfaces/transaction.repository.interface";
import { CreateSingleTransactionOutsideDTO } from "@logic/dtos/transaction";

export class CreateMultipleTransactionOutsideUseCase {
  constructor(
    private _transactionRepo: ITransactionRepository,
    private data: Array<CreateSingleTransactionOutsideDTO>
  ) {}
  execute(): BaseTransactionResponse {
    return this._transactionRepo.createMultiple(this.data);
  }
}
