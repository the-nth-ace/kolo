import { IUseCase } from "@logic/lib";
import { ITransactionRepository } from "@data-layer/transaction";
import { UpdateTransactionRequestDTO } from "@logic/transaction";
import { InternalServerError } from "routing-controllers";

export class UpdateTransactionUseCase implements IUseCase {
  constructor(
    private _transactionRepo: ITransactionRepository,
    private id: string,
    private updateTransactionRequestDTO: UpdateTransactionRequestDTO
  ) {}
  async execute(): Promise<any> {
    try {
      await this._transactionRepo.update(
        this.id,
        this.updateTransactionRequestDTO
      );
      return "Updated Transaction Successfully";
    } catch (err) {
      throw new InternalServerError("Something went wrong");
    }
  }
}
