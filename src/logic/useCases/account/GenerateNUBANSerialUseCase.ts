import { GenerateNumberOfLengthN } from "@logic/useCases/account/GenerateNumberOfLengthN";
import { AccountRepository } from "@data/account/account.repository";
import { ResourceNotFoundException } from "@logic/exceptions/ResourceNotFoundException";

export class GenerateNUBANSerialUseCase {
  private generateNumberOfLength: GenerateNumberOfLengthN;
  private accountRepository: AccountRepository;
  private readonly nubanLength: number = 9;

  public constructor(
    accountRepository: AccountRepository,
    generateNumberOfLength: GenerateNumberOfLengthN
  ) {
    this.accountRepository = accountRepository;
    this.generateNumberOfLength = generateNumberOfLength;
  }

  public execute() {
    let nubanCandidate: string = "";
    while (true) {
      nubanCandidate = this.generateNumberOfLength
        .execute(this.nubanLength)
        .toString();
      try {
        this.accountRepository.findOneByNuban(nubanCandidate);
      } catch (e) {
        if (e instanceof ResourceNotFoundException) {
          break;
        }
      }
    }
    return nubanCandidate;
  }
}
