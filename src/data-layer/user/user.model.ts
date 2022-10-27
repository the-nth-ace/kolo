import mongoose from "mongoose";
import bcrypt from "bcrypt";
import { CustomerSchema } from "@data-layer/customer";

const saltRounds = 8;

export interface IUser {
  _id: string;
  email: string;
  passwordHash: string;
  firstName: string;
  lastName: string;
  roles: any[];
  createdAt: Date;
  customerId?: any;
  updatedAt?: Date | undefined;
  token?: string | undefined;
  expiresOn?: string | undefined;
}

export const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },

  passwordHash: {
    type: String,
    required: true,
  },

  firstName: {
    type: String,
    required: true,
  },

  lastName: {
    type: String,
    required: true,
  },

  createdAt: {
    type: Date,
    required: true,
    default: Date.now,
  },

  updatedAt: {
    type: Date,
    required: false,
  },

  token: {
    type: String,
    required: false,
  },

  expiresOn: {
    type: Date,
    required: false,
  },

  roles: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Role",
    },
  ],
  customerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Customer",
    required: false,
  },
});

UserSchema.pre("save", async function (next) {
  const user = this;
  if (user.isModified("passwordHash")) {
    user.passwordHash = await bcrypt.hash(user.passwordHash, saltRounds);
  }
  next();
});

export type User = typeof UserSchema;
