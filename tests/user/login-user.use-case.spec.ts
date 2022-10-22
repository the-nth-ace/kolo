import { LoginUserUseCase } from "@logic/useCases/user";
import { TestUserRepository } from "@data/user/test-user.repository";
import { LoginDTO } from "@logic/dtos/user";

describe("Login User Use Case", () => {
  const repo = new TestUserRepository();
  const dto: LoginDTO = { email: "", password: "" };
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
