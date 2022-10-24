import { EntityStatus } from "../common";

import { AccountType, IAccount } from "./interfaces/account.interface";
import { ICustomer } from "@data-layer/customer";

export class Account implements IAccount {
  accountNumber: string;
  customer: ICustomer;
  accountName: string;
  currency: string;
  accountOpeningDate: Date;
  lastTransactionDate: Date;
  accountType: AccountType;
  bvn: string;
  status: EntityStatus;

  public constructor(
    accountNumber: string,
    customer: ICustomer,
    accountName: string,
    currency: string,
    accountOpeningDate: Date,
    lastTransactionDate: Date,
    accountType: AccountType,
    bvn: string,
    status: EntityStatus
  ) {
    this.accountNumber = accountNumber;
    this.customer = customer;
    this.accountName = accountName;
    this.currency = currency;
    this.accountOpeningDate = accountOpeningDate;
    this.lastTransactionDate = lastTransactionDate;
    this.accountType = accountType;
    this.bvn = bvn;
    this.status = status;
  }
}
