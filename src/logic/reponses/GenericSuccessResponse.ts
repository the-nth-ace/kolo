import { BaseResponse } from "./BaseResponse";
import { ResponseType } from "./ResponseType.enum";

export class GenericSuccessResponse extends BaseResponse {
  constructor(
    message: string = "success",
    resp_type = ResponseType.Success,
    status: number = 200,
    data = {}
  ) {
    super(message, resp_type, status, data);
  }
}
