import { GenericCRUDRepository } from "@data/common/generic-crud.repository";
import { FeedbackCategory } from "@data/feedback/feedback.entity";
import { CreateCustomerFeedBackDTO } from "@logic/dtos/customer";
import { BaseResponse } from "@logic/reponses/BaseResponse";
import { CreateCustomerFeedBackUseCase } from "@logic/useCases/customer";

describe("Create Customer Feedback Use Case", () => {
  const crudRepo = new GenericCRUDRepository();
  const dto: CreateCustomerFeedBackDTO = {
    reportingReference: "123344",
    feedbackCategory: FeedbackCategory.ATM,
    feedDescription: "It did not dispense",
  };

  const useCase = new CreateCustomerFeedBackUseCase(crudRepo, dto);

  const mockFeedbackRepoCreate = jest.spyOn(crudRepo, "create");
  mockFeedbackRepoCreate.mockImplementation((dto) => {
    return new BaseResponse();
  });

  it("should be defined", () => {
    expect(useCase).toBeDefined();
  });

  it("should have a _feedbackRepo property", () => {
    expect(useCase).toHaveProperty("_feedbackRepo");
  });

  it("should have a createCustomerFeedbackDTO", () => {
    expect(useCase).toHaveProperty("createCustomerFeedbackDTO");
  });

  it("should have an execute method", () => {
    expect(useCase).toHaveProperty("execute");
  });

  it("execute method should call create method on feedbackRepo", () => {
    useCase.execute();
    expect(mockFeedbackRepoCreate).toHaveBeenCalled();
  });
});
