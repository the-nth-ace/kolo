// import {
//   ExpressMiddlewareInterface,
//   Middleware,
// } from "routing-controllers";
// import { Service } from "typedi";

// @Middleware({ type: "after" })
// @Service()
// export class ResponseMiddleWare implements ExpressMiddlewareInterface {
//   use(request: any, response: any, next: (err?: any) => any) {
//     request.on("end", function () {
//       console.log("on request end");
//     });
//     next();
//   }
// }
