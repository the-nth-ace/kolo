import { TestUserRepository } from "@data-layer/user";
import { GetUserByIdUseCase } from "@logic/user/";

describe("Get User By Id use case", () => {
  const repo = new TestUserRepository();
  const findByIdMock = jest.spyOn(repo, "findUserById");
  findByIdMock.mockImplementation((id: string) => {});
  const useCase = new GetUserByIdUseCase(repo, "34343434");

  it("should be defined", () => {
    expect(useCase).toBeDefined();
  });

  it("should have a _userRepo repo", () => {
    expect(useCase).toHaveProperty("_userRepo");
  });

  it("should have a id property", () => {
    expect(useCase).toHaveProperty("id");
  });

  it("should have have an execute method", () => {
    expect(useCase.execute).toBeDefined();
  });

  it("should call call _userRepo findUserById on execute", async () => {
    await useCase.execute();
    expect(findByIdMock).toHaveBeenCalled();
  });
});
