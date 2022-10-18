import { IGenericResponse } from "@data/common/interfaces";

export class BaseResponse implements IGenericResponse {
  status: string;
  message: string;
  data: any;
}
