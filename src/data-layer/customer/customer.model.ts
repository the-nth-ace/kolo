import mongoose from "mongoose";
import {
  ICustomerAddress,
  ICustomerIdentity,
  ICustomerName,
} from "./interfaces";
import {
  CustomerIdType,
  CustomerStatus,
  CustomerType,
} from "@data-layer/customer";

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
  identities: Array<ICustomerIdentity>;
  accounts?: Array<any>;
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
      required: false,
    },
    bvn: {
      type: String,
      length: 10,
      required: false,
    },
    dateOfBirth: {
      type: Date,
      required: false,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: false,
    },
    numberOfAccounts: {
      type: Number,
      default: 0,
    },

    customerType: {
      type: String,
      enum: CustomerType,
      default: CustomerType.INDIVIDUAL,
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
    customerAddress: {
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
      required: false,
    },
    identities: {
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
      required: false,
    },
    accounts: [
      {
        type: mongoose.Types.ObjectId,
        ref: "Account",
      },
    ],
  },
  {
    toObject: {
      transform: function (doc, ret) {
        ret.id = ret._id.toString();
        delete ret.customerName._id;
        delete ret.customerAddress._id;

        for (let identity of ret.identities) {
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
