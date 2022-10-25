import mongoose from "mongoose";
import { ICustomer } from "@data-layer/customer";
import { AccountType } from "@data-layer/account/enums/account-type.enum";
import { EntityStatus } from "@data-layer/common";
export class IAccount {
  _id: string;
  accountName: string;
  accountNumber: string; // Should not be in request
  accountOpeningDate: Date; // Should not be in request
  accountType: any;
  currency: string;
  customer: ICustomer;
  lastTransactionDate: Date; // Should not be in request
  status: any; // Should not be in request
}

export const AccountSchema = new mongoose.Schema({
  accountName: {
    type: String,
    required: true,
  },
  accountNumber: {
    type: String,
    required: true,
  },
  accountOpeningDate: {
    type: Date,
    default: Date.now,
  },
  accountType: {
    type: String,
    enum: AccountType,
    required: true,
  },
  currency: {
    type: String,
    required: true,
  },
  customer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Customer",
  },
  lastTransactionDate: {
    type: Date,
    required: false,
  },
  status: {
    type: String,
    enum: EntityStatus,
    default: EntityStatus.INACTIVE,
  },
});

export type Account = typeof AccountSchema;
