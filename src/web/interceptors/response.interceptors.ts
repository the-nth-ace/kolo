import { HttpResponseFactory } from "@web/lib/http-response-factory";
import { Interceptor, InterceptorInterface, Action } from "routing-controllers";
import { Service } from "typedi";

@Interceptor()
@Service()
export class ResponseInerceptor implements InterceptorInterface {
  intercept(action: Action, content: any) {
    return HttpResponseFactory.fromAppResponse(content);
  }
}
