import mongoose from "mongoose";
import {
  TransactionStatus,
  TransactionType,
  DebitCredit,
} from "@data-layer/transaction/enums";

export interface ITransaction {
  _id: string;
  amount: number;

  currency: string;
  sourceAccount: any;
  debitOrCredit: DebitCredit;
  description: string;
  destinationAccount: string;
  destinationAccountName: string;
  destinationBankCode: string;
  destinationCurrency: string;
  destinationNarration: string;

  sourceNarration: string;
  status: TransactionStatus;
  statusCode: string;
  transactionTime: Date;
  transactionType: TransactionType;
  valueDate: Date;
}

const TransactionSchema = new mongoose.Schema({
  amount: {
    type: Number,
    required: true,
  },

  currency: {
    type: String,
    required: true,
  },

  sourceAccount: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Account",
  },

  debitOrCredit: {
    type: String,
    enum: DebitCredit,
    required: true,
  },

  description: {
    type: String,
    required: true,
  },

  destinationAccount: {
    type: String,
    required: true,
  },

  destinationAccountName: {
    type: String,
    required: true,
  },
  destinationBankCode: {
    type: String,
    required: true,
  },
  destinationCurrency: {
    type: String,
    required: true,
  },
  destinationNarration: {
    type: String,
    required: true,
  },
  sourceNarration: {
    type: String,
    required: true,
  },
  statusCode: {
    type: String,
    required: true,
  },

  status: {
    type: String,
    enum: TransactionStatus,
    required: true,
  },
  transactionType: {
    type: String,
    enum: TransactionType,
    required: true,
  },
  valueDate: {
    type: Date,
    default: Date.now,
  },
});

export type Transaction = typeof TransactionSchema;
