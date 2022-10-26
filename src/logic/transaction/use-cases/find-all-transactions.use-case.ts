import { IUseCase } from "@logic/lib";
import { ITransactionRepository } from "@data-layer/transaction";

export class FindAllTransactionsUseCase implements IUseCase {
  constructor(private _transactionRepo: ITransactionRepository) {}
  async execute(): Promise<any> {
    return await this._transactionRepo.findAll();
  }
}
