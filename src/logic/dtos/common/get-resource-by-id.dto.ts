import { IsString } from "class-validator";

export class GetResourceByIdDTO {
  @IsString()
  id: string;
}
