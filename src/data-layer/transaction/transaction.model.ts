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

export const TransactionSchema = new mongoose.Schema(
  {
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

    status: {
      type: String,
      enum: TransactionStatus,
      default: TransactionStatus.Pending,
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
  },
  {
    toObject: {
      transform: function (doc, ret) {
        ret.id = ret._id.toString();
        delete ret._id;
        delete ret.__v;
      },
    },
  }
);

export type Transaction = typeof TransactionSchema;
