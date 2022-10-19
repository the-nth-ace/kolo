import { GenericCRUDRepository } from "@data/common/generic-crud.repository";
import { FeedbackCategory } from "@data/feedback/feedback.entity";
import { UpdateCustomerFeedBackDTO } from "@logic/dtos/customer";
import { BaseResponse } from "@logic/reponses/BaseResponse";
import { UpdateCustomerFeedBackUseCase } from "@logic/useCases/customer/feedback";

describe("Update Customer Feedback Use Case", () => {
  const crudRepo = new GenericCRUDRepository();
  const dto: UpdateCustomerFeedBackDTO = {
    id: "34343",
    reportingReference: "123344",
    feedbackCategory: FeedbackCategory.ATM,
    feedDescription: "It did not dispense",
  };

  const useCase = new UpdateCustomerFeedBackUseCase(crudRepo, dto);

  const mockFeedbackRepoUpdate = jest.spyOn(crudRepo, "update");
  mockFeedbackRepoUpdate.mockImplementation((dto) => {
    return new BaseResponse();
  });

  it("should be defined", () => {
    expect(useCase).toBeDefined();
  });

  it("should have a _feedbackRepo property", () => {
    expect(useCase).toHaveProperty("_feedbackRepo");
  });

  it("should have a dto", () => {
    expect(useCase).toHaveProperty("dto");
  });

  it("should have an execute method", () => {
    expect(useCase).toHaveProperty("execute");
  });

  it("execute method should call update method on feedbackRepo", () => {
    useCase.execute();
    expect(mockFeedbackRepoUpdate).toHaveBeenCalled();
  });
});
