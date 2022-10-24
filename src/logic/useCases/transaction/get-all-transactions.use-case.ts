import { BaseTransactionResponse } from "../../../data-layer/transaction/interfaces/transaction-response.interface";
import { ITransactionRepository } from "../../../data-layer/transaction/interfaces/transaction.repository.interface";

export class GetAllTransactionsUseCase {
  constructor(private _transactionRepo: ITransactionRepository) {}
  execute(): BaseTransactionResponse {
    return this._transactionRepo.findAll();
  }
}
