import mongoose from "mongoose";

import { CustomerIdType } from "./interfaces/customer.interface";
import { CustomerIdentity } from "./customer.entity";
import {
  CustomerStatus,
  CustomerType,
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
  customerType: CustomerType;
  startDateOfRelationship: Date;
  status: CustomerStatus;
  customerAddress: ICustomerAddress;
  identity: ICustomerIdentity;
}

export const CustomerSchema = new mongoose.Schema(
  {
    customerName: {
      type: {
        firstName: {
          type: String,
          required: true,
        },
        lastName: {
          type: String,
          required: true,
        },
        middleName: {
          type: String,
        },
      },
    },
    bvn: {
      type: String,
      length: 10,
      required: true,
    },
    dateOfBirth: {
      type: Date,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    numberOfAccount: {
      type: Number,
      default: 0,
    },

    customerType: {
      type: String,
      enum: CustomerType,
      required: true,
    },

    startDateOfRelationship: {
      type: Date,
      default: Date.now,
    },

    status: {
      type: String,
      enum: CustomerStatus,
      default: CustomerStatus.INACTIVE,
    },
    CustomerAddress: {
      type: {
        street: {
          type: String,
          required: true,
        },
        city: {
          type: String,
          required: true,
        },
        state: {
          type: String,
          required: true,
        },
        country: {
          type: String,
          required: true,
        },
      },
    },
    identity: {
      type: [
        {
          idNumber: {
            type: String,
            required: true,
          },
          idType: {
            type: String,
            enum: CustomerIdType,
            required: true,
          },
          countryOfIssue: {
            type: String,
            required: true,
          },
          expiryDate: {
            type: Date,
            required: true,
          },
        },
      ],
    },
  },
  {
    toObject: {
      transform: function (doc, ret) {
        ret.id = ret._id.toString();
        ret.customerName.id = ret.customerName._id.toString();
        delete ret.customerName._id;

        for (let identity of ret.identity) {
          identity.id = identity._id.toString();
          delete identity._id;
        }

        delete ret._id;
        delete ret.__v;
      },
    },
    toJSON: {
      transform: function (doc, ret) {
        ret.id = ret._id.toString();
        delete ret._id;
        delete ret.__v;
      },
    },
  }
);

export type Customer = typeof CustomerSchema;
