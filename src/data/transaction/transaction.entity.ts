import { ITransaction } from "./interfaces/transaction.interface";

export class Transaction implements ITransaction {
  _id: string;
  statusWebHook?: string | undefined;
  channel: string;
  currency: string;
  destinationAccount: string;
  destinationAccountName: string;
  destinationNarration: string;
  referenceId: string;
  sourceAccout: string;
  sourceAccountName: string;
  sourceAmount: number;
  sourceCurrency: string;
  sourceNarration: string;

  public constructor(
    _id: string,
    statusWebHook: string | undefined,
    channel: string,
    currency: string,
    destinationAccount: string,
    destinationAccountName: string,
    destinationNarration: string,
    referenceId: string,
    sourceAccout: string,
    sourceAccountName: string,
    sourceAmount: number,
    sourceCurrency: string,
    sourceNarration: string
  ) {
    this._id = _id;
    this.statusWebHook = statusWebHook;
    this.channel = channel;
    this.currency = currency;
    this.destinationAccount = destinationAccount;
    this.destinationAccountName = destinationAccountName;
    this.destinationNarration = destinationNarration;
    this.referenceId = referenceId;
    this.sourceAccout = sourceAccout;
    this.sourceAccountName = sourceAccountName;
    this.sourceAmount = sourceAmount;
    this.sourceCurrency = sourceCurrency;
    this.sourceNarration = sourceNarration;
  }
}
