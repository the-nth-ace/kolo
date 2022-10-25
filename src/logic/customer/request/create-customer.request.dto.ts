import {
  CustomerStatus,
  CustomerType,
  CustomerIdType,
  ICustomerIdentity,
  ICustomerName,
} from "@data-layer/customer";
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
  IsOptional,
  Min,
} from "class-validator";
import { Type } from "class-transformer";

export class CustomerIdentityDTO implements ICustomerIdentity {
  @IsString()
  idNumber: string;

  @IsEnum(CustomerIdType)
  idType: CustomerIdType;

  @IsString()
  countryOfIssue: string;

  @IsDate()
  @Type(() => Date)
  expiryDate: Date;
}

export class CustomerNameDTO implements ICustomerName {
  @IsString()
  @Length(3, 100)
  firstName: string;

  @IsString()
  @Length(3, 100)
  lastName: string;

  @IsOptional()
  @Length(3, 100)
  @Min(3)
  otherNames?: string;
}

export class CustomerAddressDTO {
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
export class CreateCustomerRequestDTO {
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
  @ValidateNested({ each: true })
  @Type(() => CustomerIdentityDTO)
  identities: Array<CustomerIdentityDTO>;

  @IsString()
  phone: string;

  @IsEnum(CustomerType)
  customerType: CustomerType;
}
