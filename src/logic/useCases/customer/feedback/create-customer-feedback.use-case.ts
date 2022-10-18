import { IGenericCRUDRepository } from "@data/common/interfaces";
import { FeedbackEntity } from "@data/feedback/feedback.entity";
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
