import { IUseCase } from "@logic/lib/IUseCase";
import { IAccountRepository } from "@data-layer/account/";
import "dotenv/config";
import {
  CreateAccountDTO,
  CreateAccountRequestDTO,
  generateCheckDigit,
  generateNumberOfLengthN,
} from "@logic/account";

import { ICustomerRepository, ICustomer } from "@data-layer/customer";

export class CreateAccountUseCase implements IUseCase {
  private serialNumberLength: any;
  private bankCode = process.env.BANK_CODE;

  constructor(
    private _accountRepo: IAccountRepository,
    private _customerRepo: ICustomerRepository,
    private createAccountRequestDTO: CreateAccountRequestDTO
  ) {
    this.serialNumberLength = process.env.SERIAL_NUMBER_LENGTH;
    this.serialNumberLength = parseInt(this.serialNumberLength);
  }

  async execute(): Promise<any> {
    const customerId = this.createAccountRequestDTO.customerId;
    const customer: ICustomer = await this._customerRepo.findById(customerId);
    const acctNum: string = await this.generateAccountNumber();
    const createAccountDTO: CreateAccountDTO = {
      ...this.createAccountRequestDTO,
      accountNumber: acctNum,
      nubanCode: acctNum.substring(1, 9),
    };
    await this._accountRepo.create(createAccountDTO);

    return "Created account successfully";
  }
  private async generateAccountNumber() {
    const nubanSerial = await this.generateNubanSerial();

    const checkDigit = generateCheckDigit({
      bankCode: this.bankCode,
      nubanSerial,
    });
    return `${nubanSerial}${checkDigit}`;
  }
  private async generateNubanSerial() {
    let nubanCandidate: string = "";

    while (true) {
      console.log(nubanCandidate);
      nubanCandidate = generateNumberOfLengthN(
        this.serialNumberLength
      ).toString();
      try {
        await this._accountRepo.findOneByNuban(nubanCandidate);
      } catch (err) {
        break;
      }
    }
    return nubanCandidate;
  }
}
