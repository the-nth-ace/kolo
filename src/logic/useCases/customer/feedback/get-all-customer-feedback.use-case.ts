import { IGenericCRUDRepository } from "../../../../data-layer/common/interfaces";
import { FeedbackEntity } from "../../../../data-layer/feedback/feedback.entity";
import { BaseResponse } from "@logic/reponses/BaseResponse";

export class GetAllCustomerFeedbackUseCase {
  constructor(private _feedbackRepo: IGenericCRUDRepository<FeedbackEntity>) {}

  execute(): BaseResponse {
    return this._feedbackRepo.findAll();
  }
}
