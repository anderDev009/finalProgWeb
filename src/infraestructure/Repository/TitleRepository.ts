import { DataSourceOptions, EntityTarget, FindManyOptions } from "typeorm";
import Title from "../../domain/entities/Title";
import BaseRepository from "../Core/BaseRepository";
import ITitleRepository from "../interfaces/ITitleRepository";


class TitleRepository extends BaseRepository<Title> implements ITitleRepository<Title> {

    constructor(options: DataSourceOptions, entity: EntityTarget<Title>) {
        super(options, entity);
    }

    override async Save(entity: Title): Promise<void> {
        await this.rep.save(entity);
    }
    override async Update(id: string, entity: Title): Promise<void> {
        await this.rep.update(id, entity);
    }
    override async Remove(id: string): Promise<void> {
        const authorToRemove = await this.GetEntity(id);
        await this.rep.remove(authorToRemove);
    }
    override async GetEntities(filter: FindManyOptions): Promise<Title[]> {
        return await this.rep.find(filter);
    }
    override async GetEntity(id: string): Promise<Title> {
        return await this.rep.findOneByOrFail({ id_pub: id });
    }

    async GetCategories(): Promise<Title[]> {
        return await this.rep.createQueryBuilder("entityName")
            .select("DISTINCT entityName.tipo", "tipo")
            .getRawMany();
    }
}

export default TitleRepository