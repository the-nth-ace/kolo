import {
  IBank,
  IContactInfo,
  ILocation,
} from "../../bank/interfaces/bank.interface";

export interface IBranch {
  branchId: string;
  branchName: string;
  branchType: BranchType;
  branchCode: string;
  description: string;
  location: ILocation;
  contactInfo: Array<IContactInfo>;
  bank: IBank;
}

export enum BranchType {
  FullBranch = "FULL BRANCH",
  MiniBranch = "MINI BRANCH",
  EBranch = "E-BRANCH",
  Agency = "AGENCY",
}
