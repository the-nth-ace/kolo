import {
  CreateAccountUseCase,
  GenerateNUBANSerialUseCase,
  GenerateNumberOfLengthN,
} from "@logic/useCases/account";
import { AccountRepository } from "@data/account/account.repository";
import { CreateAccountRequestDTO } from "@logic/dtos/account/CreateAccountRequestDTO";
import { AccountType } from "@data/account/interfaces/account.interface";
import {
  CustomerIdType,
  CustomerStatus,
  CustomerType,
} from "@data/customer/interfaces/customer.interface";

beforeAll(() => {
  jest
    .spyOn(AccountRepository.prototype, "create")
    .mockImplementation(() => true);
  jest
    .spyOn(GenerateNUBANSerialUseCase.prototype, "execute")
    .mockImplementation(() => "123456789");
});

afterAll(() => {
  jest.restoreAllMocks();
});

describe("Create Account Use Case", () => {
  const dto = {
    accountName: "Solomon",
    accountOpeningDate: new Date(),
    accountType: AccountType.SAVINGS,
    bvn: "12345678911",
    currency: "NGN",
    customer: {
      id: "sdfdf",
      dateOfBirth: new Date(),
      email: "asdfd@adfd.com",
      type: CustomerType.CORPORATE,
      status: CustomerStatus.ACTIVE,
      startDateOfRelationship: new Date(),
      identity: {
        idNumber: "122222",
        idType: CustomerIdType.DRIVERS,
        countryOfIssue: "Nigeria",
        expiryDate: new Date(),
      },
      numberOfAccounts: 1,
      phone: "9090933",
      bvn: "12345678911",
      customerName: {
        firstName: "Solomon",
        lastName: "Favour",
      },
      customerAddress: {
        postalCode: "123456",
        city: "Lagos",
        country: "Nigeria",
        state: "Lagos",
        street: "Olatubosun Street",
      },
    },
    lastTransactionDate: new Date(),
  };

  it("should be defined", () => {
    let accountRepository = new AccountRepository();
    let nubanGenerator = new GenerateNUBANSerialUseCase(
      accountRepository,
      new GenerateNumberOfLengthN()
    );
    let caUC = new CreateAccountUseCase(accountRepository, nubanGenerator);
    expect(caUC).toBeDefined();
  });

  it("should return true", () => {
    let accountRepository1 = new AccountRepository();
    let nubanGen = new GenerateNUBANSerialUseCase(
      accountRepository1,
      new GenerateNumberOfLengthN()
    );
    let caUC1 = new CreateAccountUseCase(accountRepository1, nubanGen);
    expect(caUC1.execute(dto)).toBe(true);
  });
});
