import { IGenericCRUDRepository, IGenericResponse } from "./interfaces";

export class GenericCRUDRepository implements IGenericCRUDRepository<any> {
  create(item: any): IGenericResponse {
    throw new Error("Method not implemented.");
  }
  update(id: string, item: Partial<any>): IGenericResponse {
    throw new Error("Method not implemented.");
  }
  delete(id: string): IGenericResponse {
    throw new Error("Method not implemented.");
  }
  findById(id: string): IGenericResponse {
    throw new Error("Method not implemented.");
  }
  findAll(): IGenericResponse {
    throw new Error("Method not implemented.");
  }
}
