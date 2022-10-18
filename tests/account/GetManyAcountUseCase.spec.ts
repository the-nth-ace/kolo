import { GetManyAccountUseCase } from "@logic/useCases/account/GetManyAccountUseCase";
import { AccountRepository } from "@data/account/account.repository";

describe("Get All Account Use Case", function () {
  const accRepo = new AccountRepository();
  const getManyAccountUseCase = new GetManyAccountUseCase(accRepo);

  const findMock = jest.spyOn(accRepo, "find");
  findMock.mockReturnValue([]);
  it("should be defined", function () {
    expect(getManyAccountUseCase).toBeDefined();
  });

  it("should have an execute method", function () {
    expect(getManyAccountUseCase).toHaveProperty("execute");
  });

  it("should have an accountRepo property", function () {
    expect(getManyAccountUseCase).toHaveProperty("accountRepo");
  });

  it("should call accountRepo.find on execute", () => {
    getManyAccountUseCase.execute();
    expect(findMock).toHaveBeenCalled();
  });
});
