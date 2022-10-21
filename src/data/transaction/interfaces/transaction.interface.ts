import { DebitOrCredit, TransactionType } from "@data/statement/interfaces";

export enum TransactionStatus {
  Pending = "Pending",
  Success = "Success",
  Failure = "Failure",
}
export interface ITransaction {
  _id: string;
  statusWebHook?: string;
  amount: number;
  channel: string;
  currency: string;
  destinationAccount: string;
  sourceNarration: string;
  destinationAccountName: string;
  destinationNarration: string;
  destinationCurrency: string;
  destinationBankCode: string;
  latitude?: number;
  longitude?: number;
  customer: ITransactionSourceCustomer;
  description: string;
  transactionType: TransactionType;
  transactionTime: Date;
  valueDate: Date;
  status: TransactionStatus;
  statusCode: string;
  referenceId: string;
  debitOrCredit: DebitOrCredit;
}

// Get a method that can convert an account to this format.
export interface ITransactionSourceCustomer {
  accountNumber: string;
  firstname: string;
  surname: string;
  email: string;
  mobileNumber: string;
  sourceAccount: string;
  sourceAccountName: string;
  sourceCurrency: string;
}
