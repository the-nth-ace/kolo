import { IUseCase } from "@logic/lib";
import { ITransactionRepository } from "@data-layer/transaction";
import {
  CreateTransactionOutsideRequestDTO,
  CreateTransactionWithinRequestDTO,
} from "@logic/transaction";
import "dotenv/config";
import { InternalServerError } from "routing-controllers";

export class CreateMultipleTransactionWithinUseCase implements IUseCase {
  private bankCode: any = process.env.bankCode;
  constructor(
    private _transactionRepo: ITransactionRepository,
    private createMultipleTransactionsWithinRequestDTO: CreateTransactionWithinRequestDTO[]
  ) {}
  async execute(): Promise<string> {
    const repoDTO: CreateTransactionOutsideRequestDTO[] = [];
    for (let dto of this.createMultipleTransactionsWithinRequestDTO) {
      repoDTO.push({
        ...dto,
        destinationBankCode: this.bankCode,
      });
    }

    try {
      await this._transactionRepo.createMultiple(repoDTO);
      return `${
        this.createMultipleTransactionsWithinRequestDTO.length
      } Transaction${
        this.createMultipleTransactionsWithinRequestDTO.length == 1 ? "" : "s"
      } Created Successfully`;
    } catch (err) {
      throw new InternalServerError("Something went wrong");
    }
  }
}
