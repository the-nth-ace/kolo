import { IUseCase } from "@logic/lib/IUseCase";
import { IUserRepository } from "@data-layer/user/interfaces/user-repository.interface";
export class FindUserByEmailUseCase implements IUseCase {
  constructor(
    private _userRepository: IUserRepository,
    private email: string
  ) {}

  async execute() {
    return await this._userRepository.findUserByEmail(this.email);
  }
}
