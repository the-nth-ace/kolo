import { ICustomer } from "../../customer/interfaces/customer.interface";
import { EntityStatus } from "../../common";

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
