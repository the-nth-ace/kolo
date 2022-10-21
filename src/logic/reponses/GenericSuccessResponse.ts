import { BaseResponse } from "./BaseResponse";
import { ResponseType } from "./ResponseType.enum";

export class GenericSuccessResponse extends BaseResponse {
  constructor(
    message: string = "message",
    type = ResponseType.Success,
    status: number = 200,
    data = {}
  ) {
    super(message, type, status, data);
  }
}
