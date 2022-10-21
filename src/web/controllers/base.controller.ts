import { Get, JsonController } from "routing-controllers";
import { Service } from "typedi";

@JsonController()
@Service()
export class BaseController {
  @Get("")
  public index() {
    return {
      message: "success",
    };
  }
}
