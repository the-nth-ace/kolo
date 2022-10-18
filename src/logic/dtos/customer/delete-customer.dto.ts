import { IsString } from "class-validator";

export class DeleteCustomerDTO {
  @IsString()
  id: string;
}
