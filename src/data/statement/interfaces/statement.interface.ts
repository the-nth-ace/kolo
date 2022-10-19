import { EntityStatus } from "@data/common";

export interface IStatement {
  id: string;
  accountNumber: string;
  amount: number;
  currency: string;
  debitOrCredit: DebitOrCredit;
  narration: string;
  referenceId: string;
  transactionTime: Date;
  transactionType: TransactionType;
  valueDate: Date;
  balanceAfter: number;
  status: EntityStatus;
}

export enum TransactionType {
  BILLS = "Bills",
  TRANSFER = "Bank Transfer",
  CASHDEPOSIT = "Cash Deposit",
  CASHWITHDRAWAL = "Cash Withdrawal",
  ATM = "ATM Withdrawal",
}

export enum DebitOrCredit {
  Debit = "DB",
  Credit = "CR",
}
