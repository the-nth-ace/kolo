import {
  CustomerStatus,
  CustomerType,
  ICustomerAddress,
} from "@data/customer/interfaces/customer.interface";
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
  IsPostalCode,
} from "class-validator";

import { CustomerNameDTO, CustomerIdentityDTO } from "./customerDTO";
import { Type } from "class-transformer";

export class CustomerAddressDTO implements ICustomerAddress {
  @IsString()
  postalCode: string;

  @IsString()
  city: string;

  @IsString()
  country: string;

  @IsString()
  state: string;

  @IsString()
  street: string;
}
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
  //
  @IsDefined()
  @IsNotEmptyObject()
  @IsObject()
  @ValidateNested()
  @Type(() => CustomerNameDTO)
  customerName: CustomerNameDTO;

  @IsDate()
  @Type(() => Date)
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
  @Type(() => Date)
  startDateOfRelationship: Date;

  @IsEnum(CustomerType)
  customerType: CustomerType;
}
