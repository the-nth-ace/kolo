import { TransactionType } from "@data/statement/interfaces";
import {
  ITransaction,
  ITransactionSourceCustomer,
} from "./interfaces/transaction.interface";

export class Transaction implements ITransaction {
  _id: string;
  statusWebHook?: string | undefined;
  channel: string;
  currency: string;
  destinationAccount: string;
  destinationAccountName: string;
  destinationNarration: string;
  referenceId: string;
  sourceNarration: string;
  amount: number;
  destinationCurrency: string;
  destinationBankCode: string;
  customer: ITransactionSourceCustomer;
  latitude?: number | undefined;
  longitude?: number | undefined;
  description: string;
  type: TransactionType;
  time: Date;
  valueDate: Date;

  public constructor(
    _id: string,
    statusWebHook: string | undefined,
    channel: string,
    currency: string,
    destinationAccount: string,
    destinationAccountName: string,
    destinationNarration: string,
    referenceId: string,
    sourceNarration: string,
    amount: number,
    destinationCurrency: string,
    destinationBankCode: string,
    customer: ITransactionSourceCustomer,
    description: string,
    type: TransactionType,
    time: Date,
    valueDate: Date,
    latitude?: number | undefined,
    longitude?: number | undefined
  ) {
    this._id = _id;
    this.statusWebHook = statusWebHook;
    this.channel = channel;
    this.currency = currency;
    this.destinationAccount = destinationAccount;
    this.destinationAccountName = destinationAccountName;
    this.destinationNarration = destinationNarration;
    this.referenceId = referenceId;
    this.sourceNarration = sourceNarration;
    this.amount = amount;
    this.destinationAccount = destinationAccount;
    this.destinationBankCode = destinationBankCode;
    this.destinationCurrency = destinationCurrency;
    this.customer = customer;
    this.latitude = latitude;
    this.longitude = longitude;
    this.description = description;
    this.type = type;
    this.time = time;
    this.valueDate = valueDate;
  }
}
