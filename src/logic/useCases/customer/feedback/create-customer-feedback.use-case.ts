import { IGenericCRUDRepository } from "../../../../data-layer/common/interfaces";
import { FeedbackEntity } from "../../../../data-layer/feedback/feedback.entity";
import { CreateCustomerFeedBackDTO } from "@logic/dtos/customer";

export class CreateCustomerFeedBackUseCase {
  constructor(
    private _feedbackRepo: IGenericCRUDRepository<FeedbackEntity>,
    private createCustomerFeedbackDTO: CreateCustomerFeedBackDTO
  ) {}

  execute() {
    return this._feedbackRepo.create(this.createCustomerFeedbackDTO);
  }
}
