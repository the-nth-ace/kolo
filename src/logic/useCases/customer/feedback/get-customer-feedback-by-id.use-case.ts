import { IGenericCRUDRepository } from "../../../../data-layer/common/interfaces";
import { FeedbackEntity } from "../../../../data-layer/feedback/feedback.entity";
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
