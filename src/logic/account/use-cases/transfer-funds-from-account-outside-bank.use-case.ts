import { IUseCase } from "@logic/lib";
import { ITransactionRepository } from "@data-layer/transaction";
import { TransferFundsOutsideRequestDTO } from "@logic/account";
import { CreateTransactionOutsideRequestDTO } from "@logic/transaction";
import { IAccountRepository } from "../../../data-layer/account/interfaces/IAccountRepository";

export class TransferFundsFromAccountOutsideBankUseCase implements IUseCase {
  constructor(
    private _transactionRepo: ITransactionRepository,
    private _accountRepo: IAccountRepository,
    private accountId: string,
    private transferFundsFromAccountOutsideRequestDTO: TransferFundsOutsideRequestDTO
  ) {}
  async execute(): Promise<any> {
    const repoDT0: CreateTransactionOutsideRequestDTO = {
      sourceAccountID: this.accountId,
      ...this.transferFundsFromAccountOutsideRequestDTO,
    };
    await this._transactionRepo.createSingle(repoDT0);
    await this._accountRepo.chargeAccount(
      this.accountId,
      this.transferFundsFromAccountOutsideRequestDTO.amount
    );
    return "Funds Transferred Successfully";
  }
}
