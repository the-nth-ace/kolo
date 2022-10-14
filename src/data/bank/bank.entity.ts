import {
  BankCategory,
  IBank,
  IBankSocialMedia,
  IContactInfo,
  ILocation,
} from "@data/bank/interfaces/bank.interface";
import { log } from "util";

export class BankEntity implements IBank {
  bankCategory: BankCategory;
  bankName: string;
  cbnBankCode: string;
  contactInfo: Array<IContactInfo>;
  description: string;
  incorporationDate: Date;
  location: ILocation;
  logo: string;
  nibssCode: string;
  numberOfBranches: number;
  rcNumber: string;
  socialMedia: Array<IBankSocialMedia>;
  swiftCode: string;
  website: string;
  constructor(
    bankName: string,
    bankCategory: BankCategory,
    cbnBankCode: string,
    contactInfo: Array<IContactInfo>,
    description: string,
    incorporationDate: Date,
    location: ILocation,
    logo: string,
    nibssCode: string,
    numberOfBranches: number,
    rcNumber: string,
    socialMedia: Array<IBankSocialMedia>,
    swiftCode: string,
    website: string
  ) {
    this.bankCategory = bankCategory;
    this.bankName = bankName;
    this.cbnBankCode = cbnBankCode;
    this.contactInfo = contactInfo;
    this.description = description;
    this.incorporationDate = incorporationDate;
    this.location = location;
    this.logo = logo;
    this.nibssCode = nibssCode;
    this.numberOfBranches = numberOfBranches;
    this.rcNumber = rcNumber;
    this.socialMedia = socialMedia;
    this.swiftCode = swiftCode;
    this.website = website;
  }
}
