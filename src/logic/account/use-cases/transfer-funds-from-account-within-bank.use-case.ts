import { IUseCase } from "@logic/lib";
import { CreateTransactionOutsideRequestDTO } from "@logic/transaction";
import { ITransactionRepository } from "@data-layer/transaction";
import { TransferFundsWithinRequestDTO } from "@logic/account";
import "dotenv/config";

export class TransferFundsFromAccountWithinBankUseCase implements IUseCase {
  private bankCode: string = process.env.BANK_CODE;
  constructor(
    private _transactionRepo: ITransactionRepository,
    private accountId: string,
    private transferFundsFromAccountRequestDTO: TransferFundsWithinRequestDTO
  ) {}
  async execute(): Promise<any> {
    const createTransactionWithinRequestDTO: CreateTransactionOutsideRequestDTO =
      {
        destinationBankCode: this.bankCode,
        ...this.transferFundsFromAccountRequestDTO,
        sourceAccountID: this.accountId,
      };

    await this._transactionRepo.createSingle(createTransactionWithinRequestDTO);
    return "Funds Transferred Successfully";
  }
}
