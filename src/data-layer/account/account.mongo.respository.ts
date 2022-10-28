import { IAccountRepository } from "@data-layer/account/interfaces";
import { DbContext } from "@data-layer/DbContext";
import { Service, Container } from "typedi";
import { CreateAccountDTO, UpdateAccountRequestDTO } from "@logic/account";
import {
  InternalServerError,
  NotFoundError,
  BadRequestError,
} from "routing-controllers";
import { IAccount } from "@data-layer/account/account.model";

@Service()
export class MongoAccountRepository implements IAccountRepository {
  dbContext: DbContext;
  constructor() {
    this.dbContext = Container.get(DbContext);
  }

  async findOneById(id: string): Promise<IAccount> {
    const acct = await this.dbContext.account.findById(id).exec();
    if (!acct) throw new NotFoundError("Account was not found");
    return acct;
  }

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

  async chargeAccount(id: string, charge: number) {
    const account = await this.findOneById(id);
    const newBalance = account.balance - charge;
    if (newBalance < 0) throw new BadRequestError("Insufficient funds");
    try {
      return await this.dbContext.account
        .findByIdAndUpdate(id, { balance: newBalance })
        .exec();
    } catch (err) {
      throw new InternalServerError(
        "Something went wrong while charging account"
      );
    }
  }
  async fundAccount(id: string, charge: number) {
    const account = await this.findOneById(id);
    const newBalance = account.balance + charge;
    try {
      return await this.dbContext.account
        .findByIdAndUpdate(id, { balance: newBalance })
        .exec();
    } catch (err) {
      throw new InternalServerError(
        "Something went wrong while funding account"
      );
    }
  }
}
