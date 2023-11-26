import { FindManyOptions, FindOneOptions } from "typeorm";

interface IBaseRepository<T> {
    Save(entity: T): Promise<void>;
    Update(id: string, entity: T): Promise<void>;
    Remove(id: string): Promise<void>;
    GetEntities(filter: FindManyOptions): Promise<T[]>;
    GetEntity(id: string): Promise<T | null>;
}


export default IBaseRepository;