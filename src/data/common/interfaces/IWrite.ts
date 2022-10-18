import { IGenericResponse } from "./IGenericResponse";

export interface IWrite<T> {
  create(item: T): IGenericResponse;
  update(id: string, item: T): IGenericResponse;
  delete(id: string, item: T): IGenericResponse;
}
