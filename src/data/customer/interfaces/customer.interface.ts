export enum CustomerType {
    INDIVIDUAL = 'Individual',
    CORPORATE = 'Corporate',
    SME = 'SME'
}

export enum CustomerStatus {
    ACTIVE = 'active',
    INACTIVE = 'inactive',
    DORMANT = 'dormant'
}

export enum CustomerIdType{
    DRIVERS = 'drivers',
    VOTERS = 'voters',
    NIN = 'nin',
    NID = 'nid',
    IntPassport = 'intpass'

}

export interface ICustomerAddress{
    street: string
    city: string
    state: string
    country: string
    postalCode?: string

}



export interface ICustomerIdentity{
    idNumber: string
    idType: CustomerIdType
    countryOfIssue: string
    expiryDate: Date
}

export interface ICustomerName{
    firstName: string
    lastName: string
    otherNames?: string
}

export interface ICustomer{
    id: string
    customerName: ICustomerName
    bvn: string
    dateOfBirth: Date
    email: string
    phone: string
    numberOfAccounts: number
    type: CustomerType
    startDateOfRelationship: Date
    status: CustomerStatus
    customerAddress: ICustomerAddress
    identity: ICustomerIdentity

}