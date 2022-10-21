import { HttpResponseFactory } from "@web/lib/http-response-factory";
import {
  Action,
  ExpressMiddlewareInterface,
  Interceptor,
  InterceptorInterface,
  Middleware,
} from "routing-controllers";
import { Service } from "typedi";

@Middleware({ type: "after" })
@Service()
export class ResponseMiddleWare implements ExpressMiddlewareInterface {
  use(request: any, response: any, next: (err?: any) => any) {
    request.on("end", function () {
      console.log("on request end");
    });
    next();
  }
}

@Interceptor()
@Service()
export class ResponseInerceptor implements InterceptorInterface {
  intercept(action: Action, content: any) {
    // console.log(content);
    return HttpResponseFactory.fromAppResponse(content);
  }
}
