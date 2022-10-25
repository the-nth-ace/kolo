import { IUseCase } from "@logic/lib";
import { ITransactionRepository } from "@data-layer/transaction";
import { CreateTransactionOutsideRequestDTO } from "@logic/transaction";
import { InternalServerError } from "routing-controllers";

export class CreateMultipleTransactionOutsideUseCase implements IUseCase {
  bankCode: string;
  constructor(
    private _transactionRepo: ITransactionRepository,
    private createMultipleTransactionsOutsideDTO: Array<CreateTransactionOutsideRequestDTO>
  ) {}
  async execute(): Promise<any> {
    try {
      await this._transactionRepo.createMultiple(
        this.createMultipleTransactionsOutsideDTO
      );

      return `${this.createMultipleTransactionsOutsideDTO.length} Transaction${
        this.createMultipleTransactionsOutsideDTO.length == 1 ? "" : "s"
      } Created Successfully`;
    } catch (err) {
      throw new InternalServerError("Something went wrong");
    }
  }
}
