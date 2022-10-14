export interface IBank {
  bankName: string;
  description: string;
  location: ILocation;
  swiftCode: string;
  nibssCode: string;
  cbnBankCode: string;
  numberOfBranches: number;
  incorporationDate: Date;
  rcNumber: string;
  website: string;
  bankCategory: BankCategory;
  logo: string;
  contactInfo: Array<IContactInfo>;
  socialMedia: Array<IBankSocialMedia>;
}

export enum BankCategory {
  National = "NATIONAL",
  Regional = "REGIONAL",
  International = "INTERNATIONAL",
}

export interface ILocation {
  street: string;
  city: string;
  state: string;
  country: string;
  geoLocation: {
    latitude: number;
    longitude: number;
    radius?: number;
  };
}

export interface IContactInfo {
  description: string;
  type: string;
  value: string;
}
export interface IBankSocialMedia {
  description: string;
  type: string;
  value: string;
}
