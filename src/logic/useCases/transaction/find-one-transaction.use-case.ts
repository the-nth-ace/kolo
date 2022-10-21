import { BaseTransactionResponse } from "@data/transaction/interfaces/transaction-response.interface";
import { ITransactionRepository } from "@data/transaction/interfaces/transaction.repository.interface";
import { GetResourceByIdDTO } from "@logic/dtos";

export class FindOneTransactionUseCase {
  constructor(
    private _transactionRepo: ITransactionRepository,
    private dto: GetResourceByIdDTO
  ) {}
  execute(): BaseTransactionResponse {
    return this._transactionRepo.findOne(this.dto.id);
  }
}