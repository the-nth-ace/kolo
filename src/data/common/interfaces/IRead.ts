export interface IRead<T>{
    findById(id: string): Promise<T>
    findAll(item: T): Promise<T[]>
}