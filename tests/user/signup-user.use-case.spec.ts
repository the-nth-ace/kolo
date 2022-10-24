import { TestUserRepository } from "../../src/data-layer/user/test-user.repository";
import { SignUpUserRequestDTO } from "@logic/dtos/user/signup-user-request.dto";
import { BaseResponse } from "@logic/reponses/BaseResponse";
import { SignUpUserUseCase } from "@logic/useCases/user";

describe("SignUp User use case", () => {
  const repo = new TestUserRepository();

  const createMock = jest.spyOn(repo, "createUser");
  createMock.mockImplementation((dto: any) => {
    return null;
  });

  const findUserByEmailMock = jest.spyOn(repo, "findUserByEmail");

  findUserByEmailMock.mockImplementation(() => {
    return null;
  });
  const dto: SignUpUserRequestDTO = {
    email: "",
    password: "",
    firstName: "",
    lastName: "",
  };
  const useCase = new SignUpUserUseCase(repo, dto);

  it("should be defined", () => {
    expect(useCase).toBeDefined();
  });

  it("should have a _userRepo repo", () => {
    expect(useCase).toHaveProperty("_userRepo");
  });

  it("should have a dto property", () => {
    expect(useCase).toHaveProperty("dto");
  });

  it("should have have an execute method", () => {
    expect(useCase.execute).toBeDefined();
  });

  it("should call call _userRepo createUser on execute", async () => {
    await useCase.execute();

    expect(createMock).toHaveBeenCalled();
  });

  it("should return response", async () => {
    expect(await useCase.execute()).toBeInstanceOf(BaseResponse);
  });
});
