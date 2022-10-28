import { IUseCase } from "@logic/lib";
import { CreateTransactionOutsideRequestDTO } from "@logic/transaction";
import { ITransactionRepository } from "@data-layer/transaction";
import { TransferFundsWithinRequestDTO } from "@logic/account";
import "dotenv/config";
import { IAccountRepository } from "@data-layer/account/";

export class TransferFundsFromAccountWithinBankUseCase implements IUseCase {
  private bankCode: string = process.env.BANK_CODE;
  constructor(
    private _transactionRepo: ITransactionRepository,
    private _accountRep: IAccountRepository,
    private accountId: string,
    private transferFundsFromAccountRequestDTO: TransferFundsWithinRequestDTO
  ) {}
  async execute(): Promise<any> {
    await this._accountRep.findOneById(this.accountId);
    const amount = this.transferFundsFromAccountRequestDTO.amount;

    const createTransactionWithinRequestDTO: CreateTransactionOutsideRequestDTO =
      {
        destinationBankCode: this.bankCode,
        ...this.transferFundsFromAccountRequestDTO,
        sourceAccountID: this.accountId,
      };

    await this._transactionRepo.createSingle(createTransactionWithinRequestDTO);
    await this._accountRep.chargeAccount(this.accountId, amount);
    return "Funds Transferred Successfully";
  }
}
