import { generateNumberOfLengthN } from "@logic/account/utils";

describe("GenerateNumberOfLengthN Test", function () {
  it("Should be defined", () => {
    expect(generateNumberOfLengthN).toBeDefined();
  });

  it("should return a number of length 5 when called with 5", () => {
    const resp = generateNumberOfLengthN(5);
    expect(resp.toString().length).toEqual(5);
  });
  it("should return a number of length 11 when called with 11", () => {
    const resp = generateNumberOfLengthN(11);
    expect(resp.toString().length).toEqual(11);
  });
  it("should return a number of length 8 when called with 8", () => {
    const resp = generateNumberOfLengthN(8);
    expect(resp.toString().length).toEqual(8);
  });
  it("should return a result when called with 14", () => {
    const resp = generateNumberOfLengthN(14);
    expect(resp.toString().length).toEqual(14);
  });
});
