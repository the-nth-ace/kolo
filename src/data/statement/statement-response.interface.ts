import { BaseResponse } from "@logic/reponses/BaseResponse";
import { Statement } from "./statement.entity";

export class BaseStatementResponse extends BaseResponse {
  data: Partial<Statement>;
}
