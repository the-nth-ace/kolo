import { TestAccountRepository } from "@data-layer/account/account.test.repository";

describe("Test the Test Account Repository", function () {
  const repo = new TestAccountRepository();

  it("Should be defined", () => {
    expect(repo).toBeDefined();
  });

  it("Should have a create method", () => {
    expect(repo.create).toBeDefined();
  });

  it("Should have a delete method", () => {
    expect(repo.delete).toBeDefined();
  });

  it("Should have a findAll method", () => {
    expect(repo.findAll).toBeDefined();
  });

  it("Should have a findOneByAccountNumber method", () => {
    expect(repo.findOneByAccountNumber).toBeDefined();
  });

  it("Should have a findByBVN method", () => {
    expect(repo.findByBVN).toBeDefined();
  });
  it("Should have a findOneByNuban method", () => {
    expect(repo.findOneByNuban).toBeDefined();
  });

  it("Should have a update method", () => {
    expect(repo.update).toBeDefined();
  });
});
