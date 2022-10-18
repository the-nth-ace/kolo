import {
  CustomerStatus,
  CustomerType,
} from "../../../data/customer/interfaces/customer.interface";
import {
  IsEmail,
  IsDate,
  Length,
  IsInt,
  IsString,
  IsEnum,
  IsDefined,
  IsNotEmptyObject,
  IsObject,
  ValidateNested,
} from "class-validator";

import {
  CustomerAddressDTO,
  CustomerNameDTO,
  CustomerIdentityDTO,
} from "./customerDTO";
import { Type } from "class-transformer";

export class CreateCustomerDTO {
  @IsString()
  @Length(10, 10)
  bvn: string;

  @IsDefined()
  @IsNotEmptyObject()
  @IsObject()
  @ValidateNested()
  @Type(() => CustomerAddressDTO)
  customerAddress: CustomerAddressDTO;

  @IsDefined()
  @IsNotEmptyObject()
  @IsObject()
  @ValidateNested()
  @Type(() => CustomerNameDTO)
  customerName: CustomerNameDTO;

  @IsDate()
  dateOfBirth: Date;

  @IsEmail()
  email: string;

  @IsDefined()
  @IsNotEmptyObject()
  @IsObject()
  @ValidateNested()
  @Type(() => CustomerIdentityDTO)
  identity: CustomerIdentityDTO;

  @IsInt()
  numberOfAccounts: number;

  @IsString()
  phone: string;

  @IsDate()
  startDateOfRelationship: Date;

  @IsEnum(CustomerType)
  type: CustomerType;
}
