import { IUserRepository } from "../../../data-layer/user/interfaces/user-repository.interface";
import { CreateUserDTO } from "../../dtos/user/create-user.dto";
import { BadRequestError, InternalServerError } from "routing-controllers";

// TODO Refactor
export class CreateUserUseCase {
  constructor(private _userRepo: IUserRepository, private dto: CreateUserDTO) {}

  async execute() {
    const User = this._userRepo.dbContext.user;
    const Role = this._userRepo.dbContext.role;

    const foundUser = await User.findOne({
      email: this.dto.email,
    });

    if (foundUser)
      throw new BadRequestError("User with this email already exists");

    const roles = await Role.find({
      name: { $in: this.dto.roles },
    });

    if (roles.length == 0) throw new BadRequestError("Check your request data-layer");
    const newUser = new User({
      email: this.dto.email,
      passwordHash: this.dto.password,
      firstName: this.dto.firstName,
      lastName: this.dto.lastName,
    });

    await newUser.save();
    if (!newUser) throw new InternalServerError("Something went wrong");
    newUser.roles = roles.map((role) => role._id);

    await newUser.save();
    return;
  }
}
