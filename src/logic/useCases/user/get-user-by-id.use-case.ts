import { IUserRepository } from "../../../data/user/interfaces/user-repository.interface";
import { GetResourceByIdDTO } from "../../dtos/common/get-resource-by-id.dto";
import { GenericSuccessResponse } from "../../reponses/GenericSuccessResponse";
import { GenericFailureResponse } from "../../reponses/GenericFailureResponse";
import { NotFoundError } from "routing-controllers";
export class GetUserByIdUseCase {
  constructor(
    private _userRepo: IUserRepository,
    private dto: GetResourceByIdDTO
  ) {}
  async execute() {
    const user = await this._userRepo.findUserById(this.dto.id);
    if (!user) throw new NotFoundError("User with this id does not exist");
  }
}
