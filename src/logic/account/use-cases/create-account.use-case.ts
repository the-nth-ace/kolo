import { IUseCase } from "@logic/lib/IUseCase";
import { IAccountRepository } from "@data-layer/account/interfaces/IAccountRepository";
import {
  generateCheckDigit,
  generateNumberOfLengthN,
} from "@logic/account/utils";

import "dotenv/config";
import { InternalServerError } from "routing-controllers";
import { CreateAccountRequestDTO } from "@logic/account";

export class CreateAccountUseCase implements IUseCase {
  private serialNumberLength = process.env.SERIAL_NUMBER_LENGTH;
  private bankCode = process.env.BANK_CODE;

  constructor(
    private _accountRepo: IAccountRepository,
    private createAccountRequestDTO: CreateAccountRequestDTO
  ) {}

  async execute(): Promise<any> {
    const acctNum = this.generateAccountNumber();
    const createAccountDTO = {
      ...this.createAccountRequestDTO,
      accountNumber: acctNum,
    };
    const acct = await this._accountRepo.create(createAccountDTO);
    if (acct) return "Created account successfully";
    throw new InternalServerError(
      "Something went wrong while creating account"
    );
  }
  private generateAccountNumber() {
    const nubanSerial = this.generateNubanSerial();
    const checkDigit = generateCheckDigit({
      bankCode: this.bankCode,
      nubanSerial,
    });
    return `${nubanSerial}${checkDigit}`;
  }
  private generateNubanSerial() {
    let nubanCandidate: string = "";

    while (true) {
      nubanCandidate = generateNumberOfLengthN(
        this.serialNumberLength
      ).toString();
      const acct = this._accountRepo.findOneByNuban(nubanCandidate);
      if (acct == null) break;
    }
    return nubanCandidate;
  }
}
