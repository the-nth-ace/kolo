import { IUseCase } from "@logic/lib";
import { ITransactionRepository } from "@data-layer/transaction";

export class FindTransactionsByAccountUseCase implements IUseCase {
  constructor(
    private _transactionRepo: ITransactionRepository,
    private id: string
  ) {}
  async execute(): Promise<any> {
    return await this._transactionRepo.findByAccountId(this.id);
  }
}
