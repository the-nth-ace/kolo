import { IsString } from "class-validator";

export class DeleteStatementDTO {
  @IsString()
  id: string;
}
