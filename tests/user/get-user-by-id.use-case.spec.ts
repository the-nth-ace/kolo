import { TestUserRepository } from "@data/user/test-user.repository";
import { GetUserByIdUseCase } from "@logic/useCases/user/get-user-by-id.use-case";
import { BaseResponse } from "../../src/logic/reponses/BaseResponse";

describe("Get User By Id use case", () => {
  const repo = new TestUserRepository();
  const findByIdMock = jest.spyOn(repo, "findUserById");

  const useCase = new GetUserByIdUseCase(repo, {
    id: "34343434",
  });

  findByIdMock.mockImplementation((id) => new BaseResponse(id));

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

  it("should call call _userRepo findUserById on execute", () => {
    useCase.execute();
    expect(findByIdMock).toHaveBeenCalled();
  });

  it("should return response", () => {
    expect(useCase.execute()).toBeInstanceOf(BaseResponse);
  });
});
