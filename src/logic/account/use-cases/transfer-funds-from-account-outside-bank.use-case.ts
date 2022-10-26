import { IUseCase } from "@logic/lib";
import { ITransactionRepository } from "@data-layer/transaction";
import { TransferFundsOutsideRequestDTO } from "@logic/account";
import { CreateTransactionOutsideRequestDTO } from "@logic/transaction";

export class TransferFundsFromAccountOutsideBankUseCase implements IUseCase {
  constructor(
    private _transactionRepo: ITransactionRepository,
    private accountId: string,
    private transferFundsFromAccountOutsideRequestDTO: TransferFundsOutsideRequestDTO
  ) {}
  async execute(): Promise<any> {
    const repoDT0: CreateTransactionOutsideRequestDTO = {
      sourceAccountID: this.accountId,
      ...this.transferFundsFromAccountOutsideRequestDTO,
    };
    await this._transactionRepo.createSingle(repoDT0);
    return "Funds Transferred Successfully";
  }
}
