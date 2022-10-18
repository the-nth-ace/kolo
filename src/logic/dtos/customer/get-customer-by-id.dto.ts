import { IsString } from "class-validator";

export class GetCustomerByIdDTO {
  @IsString()
  id: string;
}
