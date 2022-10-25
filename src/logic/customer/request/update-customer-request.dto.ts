import { CustomerStatus, CustomerType } from "@data-layer/customer";
import {
  IsEmail,
  IsDate,
  Length,
  IsString,
  IsEnum,
  IsDefined,
  IsNotEmptyObject,
  IsObject,
  ValidateNested,
  IsOptional,
} from "class-validator";
import { Type } from "class-transformer";
import {
  CustomerAddressDTO,
  CustomerIdentityDTO,
  CustomerNameDTO,
} from "@logic/customer";

export class UpdateCustomerRequestDTO {
  @IsString()
  @Length(10, 10)
  bvn?: string;

  @IsOptional()
  @IsNotEmptyObject()
  @IsObject()
  @ValidateNested()
  @Type(() => CustomerAddressDTO)
  customerAddress?: CustomerAddressDTO;

  @IsOptional()
  @IsDefined()
  @IsNotEmptyObject()
  @IsObject()
  @ValidateNested()
  @Type(() => CustomerNameDTO)
  customerName?: CustomerNameDTO;

  @IsOptional()
  @IsDate()
  @Type(() => Date)
  dateOfBirth?: Date;

  @IsOptional()
  @IsEmail()
  email?: string;

  @IsOptional()
  @IsDefined()
  @IsNotEmptyObject()
  @IsObject()
  @ValidateNested({ each: true })
  @Type(() => CustomerIdentityDTO)
  identities?: Array<CustomerIdentityDTO>;

  @IsOptional()
  @IsString()
  phone?: string;

  @IsOptional()
  @IsEnum(CustomerType)
  customerType?: CustomerType;

  @IsOptional()
  @IsEnum(CustomerStatus)
  status?: CustomerStatus;
}
