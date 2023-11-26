import Contacto from "../../domain/entities/Contacto";
import BaseRepository from "../Core/BaseRepository";
import IContactoRepository from "../interfaces/IContactoRepository";

import {DataSourceOptions,EntityTarget,FindManyOptions} from "typeorm";

class ContactoRepository extends BaseRepository<Contacto> implements IContactoRepository{
    constructor(options: DataSourceOptions, entity: EntityTarget<Contacto>) {
        super(options, entity);
    }

    override async Save(entity: Contacto): Promise<void> {
        await this.rep.save(entity);
    }
    override async Update(id: string, entity: Contacto): Promise<void> {
        await this.rep.update(id, entity);
    }
    override async Remove(id: string): Promise<void> {
        const authorToRemove = await this.GetEntity(id);
        await this.rep.remove(authorToRemove);
    }
    override async GetEntities(filter: FindManyOptions): Promise<Contacto[]> {
        return await this.rep.find(filter);
    }
    override async GetEntity(id: string): Promise<Contacto> {
        return await this.rep.findOneByOrFail({ id: id });
    }

}

export default ContactoRepository;