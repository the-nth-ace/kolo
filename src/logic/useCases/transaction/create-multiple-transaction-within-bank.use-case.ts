import { ITransaction } from "@data/transaction/interfaces/transaction.interface";
import { ITransactionRepository } from "@data/transaction/interfaces/transaction.repository.interface";
import { CreateSingleTransactionWithinDTO } from "@logic/dtos/transaction";

export class CreateMultipleTransactionWithinUseCase {
  private bankCode = "444";
  constructor(
    private _transactionRepo: ITransactionRepository,
    private data: Array<CreateSingleTransactionWithinDTO>
  ) {}
  execute() {
    let payload = [];
    for (let dto of this.data) {
      payload.push({
        ...dto,
        bankCode: this.bankCode,
      });
    }
    return this._transactionRepo.createMultiple(payload);
  }
}
