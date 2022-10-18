import { GenericCRUDRepository } from "@data/common/generic-crud.repository";
import { GetResourceByIdDTO } from "@logic/dtos";
import { BaseResponse } from "@logic/reponses/BaseResponse";
import { GetCustomerFeedbackByIdUseCase } from "@logic/useCases/customer/feedback";

describe("Create Customer Feedback Use Case", () => {
  const crudRepo = new GenericCRUDRepository();
  const dto: GetResourceByIdDTO = {
    id: "34343",
  };

  const useCase = new GetCustomerFeedbackByIdUseCase(crudRepo, dto);

  const mockFeedbackRepofindByID = jest.spyOn(crudRepo, "findById");
  mockFeedbackRepofindByID.mockImplementation((dto) => {
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

  it("execute method should call findById method on feedbackRepo", () => {
    useCase.execute();
    expect(mockFeedbackRepofindByID).toHaveBeenCalled();
  });
});
