import {
    ICustomer,
    ICustomerIdentity,
    ICustomerAddress,
    CustomerStatus,
    CustomerType,
    CustomerIdType, ICustomerName
} from "./interfaces/customer.interface";


export class CustomerAddress implements ICustomerAddress{
    street: string
    city: string
    state: string
    country: string
    postalCode?: string

    constructor(street: string, city: string, state: string, country: string, postalCode?: string) {
        this.street = street
        this.city = city
        this.state = state
        this.country = country
        postalCode ? this.postalCode = postalCode : null
    }

}


export class CustomerIdentity implements ICustomerIdentity{
    countryOfIssue: string;
    expiryDate: string;
    idNumber: string;
    idType: CustomerIdType;

    constructor(countryOfIssue: string, expiryDate: string, idNumber: string, idType: CustomerIdType) {
        this.countryOfIssue = countryOfIssue
        this.expiryDate = expiryDate
        this.idNumber = idNumber
        this.idType = idType
    }

}

export class CustomerName implements ICustomerName{
    firstName: string;
    lastName: string;
    otherNames?: string;

    constructor(firstName: string, lastName: string, otherNames?: string) {
        this.firstName = firstName
        this.lastName = lastName
        this.otherNames = otherNames
    }

}

export class Customer implements ICustomer{
    id: string;
    customerName: CustomerName
    bvn: string;
    dateOfBirth: Date;
    email: string;
    phone: string;
    numberOfAccounts: number;
    type: CustomerType;
    startDateOfRelationship: Date;
    status: CustomerStatus;
    customerAddress: ICustomerAddress;
    identity: ICustomerIdentity;

    constructor(id: string, customerName: CustomerName, bvn: string, dateOfBirth: Date,
                email: string, phone: string, numberOfAccounts:number, type: CustomerType,
                startDateOfRelationship: Date, status: CustomerStatus, customerAddress: CustomerAddress, identity: CustomerIdentity,) {
        this.customerAddress = customerAddress
        this.id = id
        this.customerName = customerName
        this.bvn = bvn
        this.dateOfBirth = dateOfBirth
        this.email = email
        this.phone = phone
        this.numberOfAccounts = numberOfAccounts
        this.type = type
        this.startDateOfRelationship = startDateOfRelationship
        this.status = status
        this.customerAddress = customerAddress
        this.identity = identity
    }

}