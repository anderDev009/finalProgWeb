import { DataSourceOptions, EntityTarget } from "typeorm";
import Author from "../../domain/entities/Author";
import BaseRepository from "../Core/BaseRepository";
import IAuthorRepository from "../interfaces/IAuthorRepository";
import { FindManyOptions } from "typeorm/browser";
import { FindOneOptions } from "typeorm/browser";
import { Repository } from "typeorm/browser";

class AuthorRepository extends BaseRepository<Author> implements IAuthorRepository<Author>{
    constructor(options: DataSourceOptions, entity: EntityTarget<Author>) {
        super(options, entity);
    }

    override async Save(entity: Author): Promise<void> {
        await this.rep.save(entity);
    }
    override async Update(id: string, entity: Author): Promise<void> {
        await this.rep.update(id, entity);
    }
    override async Remove(id: string): Promise<void> {
        const authorToRemove = await this.GetEntity(id);
        await this.rep.remove(authorToRemove);
    }
    override async GetEntities(filter: FindManyOptions): Promise<Author[]> {
        return await this.rep.find(filter);
    }
    override async GetEntity(id: string): Promise<Author> {
        return await this.rep.findOneByOrFail({ id_autor: id });
    }

}


export default AuthorRepository;