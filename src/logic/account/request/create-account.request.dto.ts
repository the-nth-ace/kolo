import { AccountType } from "@data-layer/account/enums/account-type.enum";
import { ICustomer } from "@data-layer/customer";

export class CreateAccountRequestDTO {
  accountName: string;
  accountType: AccountType;
  currency: string;
  customer: ICustomer;
}
