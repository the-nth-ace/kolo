import { GenerateNumberOfLengthN } from "@logic/useCases/account";

describe("Generate Number Of Length Use Case", () => {
  const useC = new GenerateNumberOfLengthN();

  it("Should be defined", () => {
    expect(useC).toBeDefined();
  });

  it("Should generate number as string of length 7", () => {
    const me = new GenerateNumberOfLengthN();
    expect(me.execute(7));
    expect(me.execute(10).toString().length).toEqual(10);
    expect(me.execute(11).toString().length).toEqual(11);
  });

  it("Should handle cases where n is > 12", () => {
    expect(useC.execute(13).toString().length).toEqual(11);
    expect(useC.execute(13).toString().length).toEqual(11);
  });
});
