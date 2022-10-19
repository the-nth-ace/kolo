import { TransactionType } from "@data/statement/interfaces";

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
  type: TransactionType;
  time: Date;
  valueDate: Date;
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
