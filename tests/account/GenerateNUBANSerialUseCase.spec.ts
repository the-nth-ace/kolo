import {
  GenerateNUBANSerialUseCase,
  GenerateNumberOfLengthNUseCase,
} from "@logic/useCases/account";
import { AccountRepository } from "@data/account/account.repository";
import { ResourceNotFoundException } from "@logic/exceptions/ResourceNotFoundException";

describe("Generate NUBAN serial number UseCase", () => {
  it("should be defined", () => {
    let accountRepository = new AccountRepository();
    let generateNumber = new GenerateNumberOfLengthNUseCase();
    let wee = new GenerateNUBANSerialUseCase(accountRepository, generateNumber);
    expect(wee).toBeDefined();
  });

  it("should generate a unique 9 word string", () => {
    let accountRepository = new AccountRepository();
    let generateNumber = new GenerateNumberOfLengthNUseCase();
    let generateNuban = new GenerateNUBANSerialUseCase(
      accountRepository,
      generateNumber
    );
    const mockFindAccountByNuban = jest.spyOn(
      accountRepository,
      "findOneByNuban"
    );
    mockFindAccountByNuban.mockImplementation(() => {
      throw new ResourceNotFoundException("This account does not exist");
    });

    expect(generateNuban.execute().toString().length).toEqual(9);
  });
});
