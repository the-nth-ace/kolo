import { GenericCRUDRepository } from "@data/common/generic-crud.repository";

import { BaseResponse } from "@logic/reponses/BaseResponse";
import { GetAllCustomerFeedbackUseCase } from "@logic/useCases/customer/feedback";

describe("Create Customer Feedback Use Case", () => {
  const crudRepo = new GenericCRUDRepository();

  const useCase = new GetAllCustomerFeedbackUseCase(crudRepo);

  const mockFeedbackRepofindAll = jest.spyOn(crudRepo, "findAll");
  mockFeedbackRepofindAll.mockImplementation(() => {
    return new BaseResponse();
  });

  it("should be defined", () => {
    expect(useCase).toBeDefined();
  });

  it("should have a _feedbackRepo property", () => {
    expect(useCase).toHaveProperty("_feedbackRepo");
  });

  it("should have an execute method", () => {
    expect(useCase).toHaveProperty("execute");
  });

  it("execute method should call findAll method on feedbackRepo", () => {
    useCase.execute();
    expect(mockFeedbackRepofindAll).toHaveBeenCalled();
  });
});
