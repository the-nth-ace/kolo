import { HttpResponseFactory } from "@web/lib/http-response-factory";
import { Interceptor, InterceptorInterface, Action } from "routing-controllers";
import { Service } from "typedi";
import { BaseResponse } from "../../logic/reponses/BaseResponse";
import { GenericSuccessResponse } from "../../logic/reponses/GenericSuccessResponse";

@Interceptor()
@Service()
export class ResponseInerceptor implements InterceptorInterface {
  intercept(action: Action, content: any) {
    const appResp = new GenericSuccessResponse();
    appResp.data = content;
    return HttpResponseFactory.fromAppResponse(appResp);
  }
}
