// accountNumber 	string 	Required The customer’s bank account number `
// amount 	number 	Required Transaction amount
// currency 	string 	Required A 3 character code that represents the currency
// channel 	string 	Optional Channel from which the transaction was done such as ATM, POS, Mobile, USSD
// debitOrCredit 	string 	Required Debit or Credit Dr or Cr
// narration 	string 	Required A description of the transaction
// referenceId 	string 	Required A unique internal reference to the specific transaction
// transactionTime 	datetime 	Required The time on which the transaction was done on the system in the format DDMMYYYY hh:mm:ss
// transactionType 	string 	Required The type of transaction
// valueDate 	datetime 	Required  The value date for transaction on the system in the format DDMMYYYY
// balanceAfter 	number 	Optional The balance of the account after the transaction was approved or authorized *\

export interface ITransaction {
  _id: string;
  statusWebHook?: string;
  channel: string;
  currency: string;
  destinationAccount: string;
  destinationAccountName: string;
  destinationNarration: string;
  referenceId: string;
  sourceAccout: string;
  sourceAccountName: string;
  sourceAmount: number;
  sourceCurrency: string;
  sourceNarration: string;
}
