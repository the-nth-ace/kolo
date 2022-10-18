import { IsString } from "class-validator";

export class DeleteCustomerFeedbackDTO {
  @IsString()
  id: string;
}
