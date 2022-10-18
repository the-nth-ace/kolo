import { IGenericCRUDRepository } from "@data/common/interfaces";
import { FeedbackEntity } from "@data/feedback/feedback.entity";
import { UpdateCustomerFeedBackDTO } from "@logic/dtos/customer";

export class UpdateCustomerFeedBackUseCase {
  constructor(
    private _feedbackRepo: IGenericCRUDRepository<FeedbackEntity>,
    private dto: UpdateCustomerFeedBackDTO
  ) {}

  execute() {
    const payLoad: Record<any, any> = {};
    for (let dtoKey in this.dto) {
      if (dtoKey != "accountId") {
        payLoad[dtoKey] = this.dto[dtoKey as keyof typeof this.dto];
      }
    }
    return this._feedbackRepo.update(this.dto.id, payLoad);
  }
}
