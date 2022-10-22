import mongoose from "mongoose";
import {
  CustomerStatus,
  CustomerType,
  //   ICustomer,
  ICustomerAddress,
  ICustomerIdentity,
  ICustomerName,
} from "./interfaces/customer.interface";

export interface ICustomer {
  _id: string;
  customerName: ICustomerName;
  bvn: string;
  dateOfBirth: Date;
  email: string;
  phone: string;
  numberOfAccounts: number;
  type: CustomerType;
  startDateOfRelationship: Date;
  status: CustomerStatus;
  customerAddress: ICustomerAddress;
  identity: ICustomerIdentity;
}

const CustomerSchema = new mongoose.Schema({
  customerName: {
    type: Object,
    required: true,
  },
});
