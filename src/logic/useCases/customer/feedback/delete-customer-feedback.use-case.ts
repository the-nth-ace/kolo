import { IGenericCRUDRepository } from "../../../../data-layer/common/interfaces";
import { FeedbackEntity } from "../../../../data-layer/feedback/feedback.entity";
import { DeleteCustomerFeedbackDTO } from "@logic/dtos/customer/delete-customer-feedback.dto";
import { BaseResponse } from "@logic/reponses/BaseResponse";

export class DeleteCustomerFeedbackUseCase {
  constructor(
    private _feedbackRepo: IGenericCRUDRepository<FeedbackEntity>,
    private dto: DeleteCustomerFeedbackDTO
  ) {}

  execute(): BaseResponse {
    return this._feedbackRepo.delete(this.dto.id);
  }
}
