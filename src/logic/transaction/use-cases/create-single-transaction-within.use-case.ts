import { IUseCase } from "@logic/lib";
import { ITransactionRepository } from "@data-layer/transaction";
import { CreateTransactionWithinRequestDTO } from "@logic/transaction";
import { InternalServerError } from "routing-controllers";

export class CreateSingleTransactionWithinUseCase implements IUseCase {
  bankCode: any = process.env.BANK_CODE;
  constructor(
    private _transactionRepo: ITransactionRepository,
    private createTransactionWithinRequestDTO: CreateTransactionWithinRequestDTO
  ) {}
  async execute(): Promise<string> {
    try {
      await this._transactionRepo.createSingle({
        ...this.createTransactionWithinRequestDTO,
        destinationBankCode: this.bankCode,
      });
      return "Transaction Created Successfully";
    } catch (err) {
      throw new InternalServerError(
        "Something went wrong while creating Transaction"
      );
    }
  }
}
