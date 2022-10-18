import { IWrite } from "./IWrite";
import { IRead } from "./IRead";
import { IGenericResponse } from "./IGenericResponse";

export interface IGenericCRUDRepository<T> {
  create(item: Partial<T>): IGenericResponse;
  update(id: string, item: Partial<T>): IGenericResponse;
  delete(id: string): IGenericResponse;
  findById(id: string): IGenericResponse;
  findAll(): IGenericResponse;
}
