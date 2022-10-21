import mongoose from "mongoose";

export interface IRole {
  _id: string;
  name: string;
}

export const Role = mongoose.model(
  "Role",
  new mongoose.Schema({
    name: String,
  })
);
