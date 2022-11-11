import { IUseCase } from "../../lib/IUseCase";
import { IUserRepository } from "../../../data-layer/user/interfaces/user-repository.interface";
export class CheckUserWithEmailUseCase implements IUseCase {
  constructor(private _userRepo: IUserRepository, private email: string) {}

  async execute() {
    await this._userRepo.findUserByEmail(this.email);
    return;
  }
}
