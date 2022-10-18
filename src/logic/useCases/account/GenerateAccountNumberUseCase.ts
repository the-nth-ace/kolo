import { GenerateAccountNumberDTO } from "@logic/dtos/account/GenerateAccountNumberDTO";
import { GenerateCheckDigitUseCase } from "@logic/useCases/account";

export class GenerateAccountNumberUseCase {
  private readonly bankCode: string;
  private readonly nubanCode: string;
  protected serialNumberLength = 9;
  private generateCheckDigitUseCase: GenerateCheckDigitUseCase;
  public constructor(generateAccountNumberDTO: GenerateAccountNumberDTO) {
    this.bankCode = generateAccountNumberDTO.bankCode;
    this.nubanCode = generateAccountNumberDTO.nubanSerial.padStart(
      this.serialNumberLength,
      "0"
    );
    this.generateCheckDigitUseCase = new GenerateCheckDigitUseCase({
      bankCode: this.bankCode,
      nubanSerial: this.nubanCode,
    });
  }

  public execute(): string {
    return `${this.nubanCode}${this.generateCheckDigitUseCase.execute()}`;
  }
}
