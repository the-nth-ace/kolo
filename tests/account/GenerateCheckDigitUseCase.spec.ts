import { GenerateCheckDigitUseCase } from "@logic/useCases/account";

describe("Generate Check Digit  Use Case", () => {
  it("Should be defined", () => {
    let geneCheckUC = new GenerateCheckDigitUseCase({
      bankCode: "124",
      nubanSerial: "12344",
    });
    expect(geneCheckUC).toBeDefined();
  });

  it("Should generate check digit correctly", () => {
    let newGenCheckUC = new GenerateCheckDigitUseCase({
      bankCode: "011",
      nubanSerial: "000001457",
    });
    expect(newGenCheckUC.execute()).toEqual("9");
    let newGenCheckUC2 = new GenerateCheckDigitUseCase({
      bankCode: "011",
      nubanSerial: "000000022",
    });
    expect(newGenCheckUC2.execute()).toEqual("0");
  });
});
