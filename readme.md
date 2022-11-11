# Kolo

## Project Description

**What Kolo is:** 
Kolo is a loose implementation of [Nigeria’s Open Banking API](https://openbanking.ng/) . 
Thanks to *this repository*, I was able to implement without too much of a hassle. 
Using Typescript and ExpressJs as the language and primary framework respectively, 

**What Kolo is not:** As far as I know, Kolo is not production ready as there would be considerations to be made for more extensive tests, and its ability to scale. Integration of third party apis for authentication, identity verification, payments etc need to be reconsidered.

## 🚂 Tech Stack

- TypeScript
- ExpressJS
- MongoDB/Mongoose
- REST

## 🖇️ Endpoints

### Auth

* POST `/login` - Returns Token
* POST `/signup` - Signs up a new user


### Accounts


* GET `/accounts` - Returns an Array of All Accounts. Requires Staff Role.
* GET `/accounts/acctNumber/{accountNumber}` - Returns One account with specified account number. Requires Staff Role.
* GET `/accounts/{accountId}` - Returns one account with specified ID. Requires Staff Role.
* PATCH `/accounts/{accountId}` - Update one account with Request Body. Requires Staff Role.
* DELETE `/accounts/{accountId}` - Sets Account Status to Inactive. Requires Staff Role.
* GET `/accounts/{accountId}/transactions` - Gets Account Transactions for account. Requires Staff Role or the User associated with the account.
* POST `/accounts/{accountId}/transfer` - Transfers Funds from account to another account within the bank with data in the request Body. Requires User Associated with the account

* POST `/accounts/{accountId}/transfer/outside` - Transfers Funds from account to account outside the bank with data in the request Body. Requires 


### Customer

* GET `/customers` - Returns an array of customers in the database.
* POST `/customers` - Creates a new Customer with request - Expects Json / Form data body. Requires User with Staff / Admin Role.
* GET `/customers/{customerId}` - Returns One Customer with specified ID. Requires User with Staff/Admin Role
* PATCH `/customers/{customerId}` - Updates Customer Data with request Body. Requires user with Staff/Admin Role.
* DELETE `/customers/{customerId}` - Sets customer Status to inavtive. Required user with Staff/Admin Role

## Transactions

* GET `/transactions` - Returns an array of all transactions. Requires Staff or Admin Role
* GET `/transactions/{transactionId}` - Returns transaction with the associated ID.  Requires user with Staff Role or the Associated User
* PATCH `/transactions/{transactionId}` - Updates transaction with request body to inavtive. Requires user with Staff/Admin Role
* DELETE `/transactions/{transactionId}` - Sets transactions Status to inavtive. Required user with Staff/Admin Role

- 

## 🎭 Live Link