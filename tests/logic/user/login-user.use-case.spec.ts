import { LoginUserUseCase } from "@logic/user/use-cases";
import { TestUserRepository } from "@data-layer/user/test-user.repository";
import { LoginUserRequestDTO } from "@logic/user";

describe("Login User Use Case", () => {
  const repo = new TestUserRepository();
  const dto: LoginUserRequestDTO = { email: "", password: "" };
  const useCase = new LoginUserUseCase(repo, dto);
  it("should be defined", function () {
    expect(useCase).toBeDefined();
  });

  it("should have a _userRepo property", () => {
    expect(useCase).toHaveProperty("_userRepo");
  });

  it("should have a dto property", () => {
    expect(useCase).toHaveProperty("dto");
  });

  it("should have an execute method", () => {
    expect(useCase.execute).toBeDefined();
  });

  it("should have a checkPassword", () => {
    expect(useCase.checkPassword).toBeDefined();
  });

  it("should have signUser", () => {
    expect(useCase.signUser).toBeDefined();
  });
});
