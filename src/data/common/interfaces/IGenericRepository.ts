import {IWrite} from "./IWrite";
import {IRead} from "./IRead";

export class BaseRepository<T> implements IWrite<T>, IRead<T>{
    findById(id: string): Promise<T> {
        throw new Error("Method not implemented.");
    }
    findAll(item: T): Promise<T[]> {
        throw new Error("Method not implemented.");
    }
    create(item: T): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    update(id: string, item: T): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    delete(id: string, item: T): Promise<boolean> {
        throw new Error("Method not implemented.");
    }

}

