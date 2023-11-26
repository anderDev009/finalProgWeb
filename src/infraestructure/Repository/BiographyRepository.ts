import Biography from "../../domain/entities/Biography";
import BaseRepository from "../Core/BaseRepository";
import IBiographyRepository from "../interfaces/IBiographyRepository";
import {DataSourceOptions,EntityTarget,FindManyOptions} from "typeorm";

class BiographyRepository extends BaseRepository<Biography> implements IBiographyRepository{
    constructor(options: DataSourceOptions, entity: EntityTarget<Biography>) {
        super(options, entity);
    }

    override async Save(entity: Biography): Promise<void> {
        await this.rep.save(entity);
    }
    override async Update(id: string, entity: Biography): Promise<void> {
        await this.rep.update(id, entity);
    }
    override async Remove(id: string): Promise<void> {
        const biographyToRemove = await this.GetEntity(id);
        await this.rep.remove(biographyToRemove);
    }
    override async GetEntities(filter: FindManyOptions): Promise<Biography[]> {
        return await this.rep.find(filter);
    }
    override async GetEntity(id: string): Promise<Biography> {
        return await this.rep.findOneByOrFail({ id_autor: id });
    }

}

export default BiographyRepository;