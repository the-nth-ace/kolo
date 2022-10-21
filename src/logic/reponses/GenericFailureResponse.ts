import { BaseResponse } from "./BaseResponse";
import { ResponseType } from "./ResponseType.enum";

export class GenericFailureResponse extends BaseResponse {
  constructor(
    message: string = "message",
    resp_type: ResponseType = ResponseType.HttpError,
    status: number = 404,
    data = {}
  ) {
    super(message, resp_type, status, data);
  }
}
