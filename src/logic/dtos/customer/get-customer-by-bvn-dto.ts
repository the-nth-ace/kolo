import { IsString, Length } from "class-validator";

export class GetCustomerByBVNDTO {
  @IsString()
  @Length(11, 11)
  bvn: string;
}
