import { IGenericResponse } from "@data/common/interfaces";
import { ResponseType } from "./ResponseType.enum";

export class BaseResponse implements IGenericResponse {
  constructor(
    message: string = "",
    resp_type: ResponseType = ResponseType.Success,
    status: number = 200,
    data: any = {}
  ) {
    this.data = data;
    this.message = message;
    this.status = status;
    this.resp_type = resp_type;
  }
  status: number;
  message: string;
  data: any;
  resp_type: ResponseType;
}
