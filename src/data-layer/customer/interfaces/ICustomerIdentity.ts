import { CustomerIdType } from "@data-layer/customer";

export interface ICustomerIdentity {
  idNumber: string;
  idType: CustomerIdType;
  countryOfIssue: string;
  expiryDate: Date;
}
