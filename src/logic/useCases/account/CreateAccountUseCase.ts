import { IAccountRepository } from "../../../data-layer/account/interfaces/IAccountRepository";
import { GenerateNUBANSerialUseCase } from "@logic/useCases/account/GenerateNUBANSerialUseCase";
import { GenerateAccountNumberUseCase } from "@logic/useCases/account/GenerateAccountNumberUseCase";
import { CreateAccountRequestDTO } from "@logic/dtos/account/CreateAccountRequestDTO";

export class CreateAccountUseCase {
  private readonly nubanSerial: string;
  private readonly accountNumber: string;
  private bankCode: string = "001";
  public constructor(
    private _accountRepository: IAccountRepository,
    private _nubanGen: GenerateNUBANSerialUseCase
  ) {
    this.nubanSerial = this._nubanGen.execute();
    const accountNumberGenerator = new GenerateAccountNumberUseCase({
      bankCode: this.bankCode,
      nubanSerial: this.nubanSerial,
    });
    this.accountNumber = accountNumberGenerator.execute();
  }
  public execute(createAccountRequestDTO: CreateAccountRequestDTO): boolean {
    /**
     * create account
     * @param createAccountRequestDTO
     */
    const createAccountDTO = {
      ...createAccountRequestDTO,
      nubanSerial: this.nubanSerial,
      accountNumber: this.accountNumber,
    };
    return this._accountRepository.create(createAccountDTO);
  }
}
