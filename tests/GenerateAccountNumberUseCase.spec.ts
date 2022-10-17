import {
  GenerateAccountNumberUseCase,
  GenerateNUBANSerialUseCase,
} from "@logic/useCases/account";

describe("Generate Account Number test", () => {
  const dto = {
    bankCode: "001",
    nubanSerial: "100002334",
  };
  it("it should be defined", () => {
    let genUs = new GenerateAccountNumberUseCase(dto);
    expect(genUs).toBeDefined();
  });

  it("should return a code of length 10", function () {
    let genUs = new GenerateAccountNumberUseCase(dto);
    expect(genUs.execute().length).toEqual(10);
  });
});
