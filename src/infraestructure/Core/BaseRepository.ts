import { DataSourceOptions, ObjectLiteral, Repository, EntityTarget, FindManyOptions, FindOneOptions } from "typeorm";
import IBaseRepository from "./IBaseRepository";
import LibraryContext from "../context/LibraryContext";

class BaseRepository<T extends ObjectLiteral> implements IBaseRepository<T>{
    protected ctx: LibraryContext;
    protected rep: Repository<T>;
    constructor(options: DataSourceOptions, entity: EntityTarget<T>) {
        this.ctx = new LibraryContext(options);
        this.rep = this.ctx.getRepository(entity);
        this.ctx.initialize()
            .then((msj) => { console.log("Conectado") })
            .catch((err) => { console.log(`Error: ${err}`) })
    }
    async Save(entity: T): Promise<void> {
        await this.rep.save(entity);
    }
    async Update(id: string, entity: T): Promise<void> {
        await this.rep.update(id, entity);
    }
    async Remove(id: string): Promise<void> {
        const authorToRemove = await this.GetEntity(id);
        await this.rep.remove(authorToRemove);
    }
    async GetEntities(filter: FindManyOptions): Promise<T[]> {
        return await this.rep.find(filter);
    }
    async GetEntity(id: string): Promise<T> {
        return this.rep.findOneOrFail({});
    }

}

export default BaseRepository