import { IGenericCRUDRepository } from "@data/common/interfaces";
import { FeedbackEntity } from "@data/feedback/feedback.entity";
import { GetResourceByIdDTO } from "@logic/dtos";
import { BaseResponse } from "@logic/reponses/BaseResponse";

export class GetCustomerFeedbackByIdUseCase {
  constructor(
    private _feedbackRepo: IGenericCRUDRepository<FeedbackEntity>,
    private dto: GetResourceByIdDTO
  ) {}

  execute(): BaseResponse {
    return this._feedbackRepo.findById(this.dto.id);
  }
}
