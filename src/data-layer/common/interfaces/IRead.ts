import { IGenericResponse } from "./IGenericResponse";

export interface IRead<T> {
  findById(id: string): IGenericResponse;
  findAll(item: T): IGenericResponse;
}
