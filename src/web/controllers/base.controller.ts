import { Get, JsonController, UseBefore } from "routing-controllers";
import { Service } from "typedi";
import { GenericSuccessResponse } from "@logic/reponses";
import { AllowedRoles } from "../middlwares/role.middleware";
import { UserRole } from "@data-layer/user/enums/user.role.enum";

@JsonController()
@UseBefore(AllowedRoles([UserRole.ADMIN, UserRole.STAFF]))
@Service()
export class BaseController {
  @Get("")
  public index() {
    return new GenericSuccessResponse("success");
  }
}
