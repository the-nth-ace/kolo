import { EntityStatus } from "../../common";
import { ICustomer } from "@data-layer/customer";

export enum AccountType {
  SAVINGS = "Savings",
  CURRENT = "Current",
  DOMICILIARY = "Domiciliary",
  FIXED = "Fixed Deposit",
  NRN = "Non Resident Nigerian",
  CORPORATE = "Corporate",
}
export interface IAccount {
  accountNumber: string;
  customer: ICustomer;
  accountName: string;
  currency: string;
  accountOpeningDate: Date;
  lastTransactionDate: Date;
  accountType: AccountType;
  bvn: string;
  status: EntityStatus;
}
