import { AccountRepository } from "@data/account/account.repository";

describe("Account repository", () => {
  const accRep = new AccountRepository();
  it("should be defined", () => {
    expect(accRep).toBeDefined();
  });
  it("should have a create method", () => {
    expect(accRep.create).toBeDefined();
  });

  it("should have a find method", () => {
    expect(accRep.find).toBeDefined();
  });

  it("should have a findOneByAccountNumber method", () => {
    expect(accRep.findOneByAccountNumber).toBeDefined();
  });
  it("should have a findOneByBVN method", () => {
    expect(accRep.findOneByBVN).toBeDefined();
  });
  it("should have a findOneByNuban method", () => {
    expect(accRep.findOneByNuban).toBeDefined();
  });
  it("should have a update method", () => {
    expect(accRep.update).toBeDefined();
  });
  it("should have a delete method", () => {
    expect(accRep.delete).toBeDefined();
  });
});
