export enum FeedbackCategory {
  BILLPAYMENT = "Bill Payment",
  FRAUD = "Fraud",
  ATM = "ATM",
}

export class FeedbackEntity {
  feedbackReference: string;
  customerID: string;
  accountNumber: string;
  bvn: string;
  phoneNumber: string;
  feedbackCategory: FeedbackCategory;
}
