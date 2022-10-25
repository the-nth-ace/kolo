// import { BaseTransactionResponse } from "../../../data-layer/transaction/interfaces/transaction-response.interface";
// import { ITransactionRepository } from "../../../data-layer/transaction/interfaces/transaction.repository.interface";
// import { CreateSingleTransactionWithinDTO } from "@logic/dtos/transaction";
//
// export class CreateSingleTransactionWithinBankUseCase {
//   private bankCode = "444";
//   constructor(
//     private _transactionRepo: ITransactionRepository,
//     private dto: CreateSingleTransactionWithinDTO
//   ) {}
//   execute(): BaseTransactionResponse {
//     // Add bankcode to dto
//
//     const payload = {
//       ...this.dto,
//       destinationBankCode: this.bankCode,
//     };
//
//     return this._transactionRepo.createSingle(payload);
//   }
// }
