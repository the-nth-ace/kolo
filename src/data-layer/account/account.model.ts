import mongoose from "mongoose";
import { ICustomer } from "@data-layer/customer";
import { AccountType } from "@data-layer/account/";
import { EntityStatus } from "@data-layer/common";
import { Container } from "typedi";
import { DbContext } from "../DbContext";

export class IAccount {
  _id: string;
  accountName: string;
  balance: number;
  accountNumber: string;
  accountOpeningDate: Date;
  accountType: any;
  currency: string;
  customerId: any;
  nubanCode: string;
  lastTransactionDate: Date;
  createdAt?: Date;
  updatedAt?: Date;
  status: any;
}

export const AccountSchema = new mongoose.Schema(
  {
    accountName: {
      type: String,
      required: true,
    },
    balance: {
      type: Number,
      default: 0,
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
    customerId: {
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

    nubanCode: {
      type: String,
      required: true,
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

AccountSchema.pre("save", async function (next) {
  const account = this;
  const dbContext = Container.get(DbContext);

  if (account.isNew) {
    const customer = await dbContext.customer
      .findById(account.customerId)
      .exec();
    if (customer) {
      customer.numberOfAccounts = customer.numberOfAccounts + 1;
      customer.save();
    }
  }
  next();
});

AccountSchema.pre("deleteOne", async function (next) {
  // update the customer
  console.log("ABout to delete account");
  next();
});
export type Account = typeof AccountSchema;
