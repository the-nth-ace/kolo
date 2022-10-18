import { IAccountRepository } from "@data/account/interfaces/IAccountRepository";
import { UpdateAccountDTO } from "@logic/dtos/account/UpdateAccountDTO";

export class UpdateAccountUseCase {
  constructor(
    private accountRepo: IAccountRepository,
    private updateAccountDto: UpdateAccountDTO
  ) {}
  execute() {
    const id = this.updateAccountDto.accountId;
    const payLoad: Record<any, any> = {};
    for (let updateAccountDtoKey in this.updateAccountDto) {
      if (updateAccountDtoKey != "accountId") {
        payLoad[updateAccountDtoKey] =
          this.updateAccountDto[
            updateAccountDtoKey as keyof typeof this.updateAccountDto
          ];
      }
    }
    return this.accountRepo.update(id, payLoad);
  }
}
