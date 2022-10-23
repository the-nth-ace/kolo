import {
  CustomerIdType,
  ICustomer,
  ICustomerAddress,
  ICustomerIdentity,
  ICustomerName,
  CustomerStatus,
  CustomerType,
} from "../../../data/customer/interfaces/customer.interface";
import {
  IsDate,
  IsDefined,
  IsEmail,
  IsEnum,
  IsNotEmptyObject,
  IsNumber,
  IsObject,
  IsOptional,
  IsPhoneNumber,
  IsPostalCode,
  IsString,
  IsUUID,
  Length,
  Min,
  ValidateNested,
} from "class-validator";
import { Type } from "class-transformer";

export class CustomerAddressDTO implements ICustomerAddress {
  @IsPostalCode()
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
// export class CustomerDTO implements ICustomer {
//   @IsString()
//   @Length(10, 10)
//   bvn: string;
//
//   @IsDefined()
//   @IsNotEmptyObject()
//   @IsObject()
//   @ValidateNested()
//   @Type(() => CustomerAddressDTO)
//   customerAddress: CustomerAddressDTO;
//
//   @IsDefined()
//   @IsNotEmptyObject()
//   @IsObject()
//   @ValidateNested()
//   @Type(() => CustomerNameDTO)
//   customerName: CustomerNameDTO;
//
//   @IsDate()
//   dateOfBirth: Date;
//
//   @IsEmail()
//   email: string;
//
//   @IsUUID()
//   id: string;
//
//   @IsDefined()
//   @IsNotEmptyObject()
//   @IsObject()
//   @ValidateNested()
//   @Type(() => CustomerIdentityDTO)
//   identity: CustomerIdentityDTO;
//
//   @IsNumber()
//   numberOfAccounts: number;
//
//   @IsPhoneNumber("ZZ")
//   phone: string;
//
//   @IsDate()
//   startDateOfRelationship: Date;
//
//   @IsEnum(CustomerStatus)
//   status: CustomerStatus;
//
//   @IsEnum(CustomerType)
//   type: CustomerType;
// }
