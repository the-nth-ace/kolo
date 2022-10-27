import { IAccountRepository } from "@data-layer/account/interfaces";
import { DbContext } from "@data-layer/DbContext";
import { Service } from "typedi";
import {
  CreateAccountDTO,
  CreateAccountRequestDTO,
  UpdateAccountRequestDTO,
} from "@logic/account";
import { InternalServerError, NotFoundError } from "routing-controllers";
import { IAccount } from "@data-layer/account/account.model";

@Service()
export class MongoAccountRepository implements IAccountRepository {
  constructor(public dbContext: DbContext) {}

  async create(createAccountRequestDTO: CreateAccountDTO): Promise<any> {
    try {
      return await this.dbContext.account.create(createAccountRequestDTO);
    } catch (e: any) {
      console.log(e.message);
      throw new InternalServerError(
        "Something went wrong while Account was being created in DB"
      );
    }
  }

  async delete(id: string): Promise<null> {
    try {
      await this.dbContext.account.findByIdAndDelete(id).exec();
      return null;
    } catch (e) {
      throw new InternalServerError(
        "Something went wrong while Account was being deleted in DB"
      );
    }
  }

  async findAll(): Promise<Array<IAccount>> {
    const data = await this.dbContext.account.find().exec();
    const resp: Array<IAccount> = [];
    for (let d of data) {
      resp.push(d.toObject());
    }
    return resp;
  }

  async findByBVN(bvn: string): Promise<any> {
    const data = await this.dbContext.account
      .find({
        bvn,
      })
      .exec();

    const resp: Array<any> = [];
    for (let d of data) {
      resp.push(d.toObject());
    }
    return resp;
  }

  async findOneByAccountNumber(accountNumber: string): Promise<IAccount> {
    const acct = await this.dbContext.account
      .findOne({
        accountNumber,
      })
      .exec();
    if (acct) {
      return acct.toObject();
    }
    throw new NotFoundError("No Account Found");
  }

  async findOneByNuban(nubanCode: string): Promise<IAccount> {
    const acct = await this.dbContext.account
      .findOne({
        nubanCode,
      })
      .exec();
    if (acct) return acct.toObject();
    throw new NotFoundError("No Account Found");
  }

  async update(
    id: string,
    updateAccountRequestDTO: UpdateAccountRequestDTO
  ): Promise<any> {
    try {
      return await this.dbContext.account
        .findByIdAndUpdate(id, updateAccountRequestDTO)
        .exec();
    } catch (err: any) {
      throw new InternalServerError(
        "Something went wrong while updating Account details"
      );
    }
  }
}
