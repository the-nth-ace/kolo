import { IUserRepository } from "@data-layer/user";

export class GetUserByIdUseCase {
  constructor(private _userRepo: IUserRepository, private id: string) {}
  async execute() {
    return await this._userRepo.findUserById(this.id);
  }
}
