import { GenerateNumberOfLengthNUseCase } from "@logic/useCases/account/GenerateNumberOfLengthN";
import { ResourceNotFoundException } from "@logic/exceptions/ResourceNotFoundException";
import { IAccountRepository } from "../../../data-layer/account/interfaces/IAccountRepository";

export class GenerateNUBANSerialUseCase {
  private generateNumberOfLength: GenerateNumberOfLengthNUseCase;
  private accountRepository: IAccountRepository;
  private readonly nubanLength: number = 9;

  public constructor(
    accountRepository: IAccountRepository,
    generateNumberOfLength: GenerateNumberOfLengthNUseCase
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
