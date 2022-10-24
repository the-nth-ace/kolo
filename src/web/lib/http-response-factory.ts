import { BaseResponse } from "@logic/reponses";
import { ResponseType } from "@logic/reponses/ResponseType.enum";
import { Document } from "mongoose";
import {
  BadRequestError,
  ForbiddenError,
  HttpError,
  InternalServerError,
  NotFoundError,
  UnauthorizedError,
} from "routing-controllers";

export class HttpResponseFactory {
  constructor(
    public readonly data: any = {},
    public readonly error: string | null = null,
    public readonly statusCode: number
  ) {}

  private static success(resp: BaseResponse) {
    const payload: any = {};
    // remove resp_type and status from BaseResponse object
    for (let respKey in resp) {
      if (respKey == "resp_type" || respKey == "status") continue;
      payload[respKey] = resp[respKey as keyof typeof resp];
    }
    return {
      ...payload,
    };
  }

  private static failed(resp: BaseResponse) {
    switch (resp.resp_type) {
      case ResponseType.AuthorizationError:
        throw new UnauthorizedError(resp.message);

      case ResponseType.ForbiddenError:
        throw new ForbiddenError(resp.message);

      case ResponseType.InternalServerError:
        throw new InternalServerError(resp.message);

      case ResponseType.NotFoundError:
        throw new NotFoundError(resp.message);

      case ResponseType.ValidationError:
        throw new BadRequestError(resp.message);

      case ResponseType.BadRequestError:
        throw new BadRequestError(resp.message);

      default:
        throw new HttpError(resp.status, resp.message);
    }
  }

  public static fromAppResponse(resp: BaseResponse) {
    if (resp.resp_type == ResponseType.Success)
      return HttpResponseFactory.success(resp);
    return HttpResponseFactory.failed(resp);
  }
}
