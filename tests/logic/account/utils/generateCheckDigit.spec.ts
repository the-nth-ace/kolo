import { generateCheckDigit } from "@logic/account/utils";

describe("Generate check digit Test", function () {
  it("Should be defined", () => {
    expect(generateCheckDigit).toBeDefined();
  });
  it("Should generate check digit correctly", () => {
    expect(
      generateCheckDigit({
        bankCode: "011",
        nubanSerial: "000001457",
      })
    ).toEqual("9");

    expect(
      generateCheckDigit({
        bankCode: "011",
        nubanSerial: "000000022",
      })
    ).toEqual("0");
  });
});
