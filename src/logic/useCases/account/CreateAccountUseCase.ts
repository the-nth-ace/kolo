import { IAccountRepository } from "@data/account/interfaces/IAccountRepository";
import { CreateAccountDTO } from "@logic/dtos/account/CreateAccountDTO";
import { UnknownException } from "@logic/exceptions/UnknownException";

export class CreateAccountUseCase {
  public constructor(private _accountRepository: IAccountRepository) {}
  public execute(createAccountDTO: CreateAccountDTO): boolean {
    try {
      const customer = this._accountRepository.create(createAccountDTO);
    } catch (err: any) {
      throw new UnknownException(`${err.message}`);
    }
    return true;
  }
}
