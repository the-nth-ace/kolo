import { IUseCase } from "@logic/lib";
import { ITransactionRepository } from "@data-layer/transaction";
import { CreateTransactionOutsideRequestDTO } from "@logic/transaction";
import { InternalServerError } from "routing-controllers";

export class CreateSingleTransactionOutsideUseCase implements IUseCase {
  constructor(
    private _transactionRepo: ITransactionRepository,
    private createTransactionOutsideRequestDTO: CreateTransactionOutsideRequestDTO
  ) {}

  async execute(): Promise<string> {
    try {
      this._transactionRepo.createSingle(
        this.createTransactionOutsideRequestDTO
      );
      return "Transaction Created Successfully";
    } catch (err) {
      throw new InternalServerError(
        "Something went wrong while creating transaction"
      );
    }
  }
}
