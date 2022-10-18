import { GenericCRUDRepository } from "@data/common/generic-crud.repository";
import { DeleteCustomerFeedbackDTO } from "@logic/dtos/customer/delete-customer-feedback.dto";
import { BaseResponse } from "@logic/reponses/BaseResponse";
import { DeleteCustomerFeedbackUseCase } from "@logic/useCases/customer/feedback";

describe("Create Customer Feedback Use Case", () => {
  const crudRepo = new GenericCRUDRepository();
  const dto: DeleteCustomerFeedbackDTO = {
    id: "34343",
  };

  const useCase = new DeleteCustomerFeedbackUseCase(crudRepo, dto);

  const mockFeedbackRepodelete = jest.spyOn(crudRepo, "delete");
  mockFeedbackRepodelete.mockImplementation((dto) => {
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

  it("execute method should call delete method on feedbackRepo", () => {
    useCase.execute();
    expect(mockFeedbackRepodelete).toHaveBeenCalled();
  });
});
