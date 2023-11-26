import { ServerCapabilities } from "typeorm/browser";
import Title from "../../domain/entities/Title";
import TitleRepository from "../../infraestructure/Repository/TitleRepository";
import ITitleService from "../contracts/ITitleService";
import ServiceResult from "../core/ServiceResult";
import TitleDtoAdd from "../dto/Title/TitleDtoAdd";
import TitleDtoRemove from "../dto/Title/TitleDtoRemove";
import TitleDtoUpdate from "../dto/Title/TitleDtoUpdate";
import TitleDtoGetCategories from "../dto/Title/TitleDtoGetCategories";
import TitleDtoBase from "../dto/Title/TitleDtoBase";

class TitleService implements ITitleService {
    private readonly titleRepository: TitleRepository

    constructor(authorRep: TitleRepository) {
        this.titleRepository = authorRep;
    }

    async GetAll(): Promise<ServiceResult> {
        var serviceResult = new ServiceResult();
        try {
            const authors = await this.titleRepository.GetEntities({});
            serviceResult.data = authors;
        } catch (err) {
            serviceResult.message = `Error intentando obtener los titulos: ${err}`;
            serviceResult.success = false;
        }
        return serviceResult;
    }
    async GetById(id: string): Promise<ServiceResult> {
        var serviceResult = new ServiceResult();
        try {
            const author = await this.titleRepository.GetEntity(id);
            serviceResult.data = author;
        } catch (err) {
            serviceResult.message = `Error intentando obtener el titulo: ${err}`;
            serviceResult.success = false;
        }
        return serviceResult;
    }
    async Remove(dtoRemove: TitleDtoRemove): Promise<ServiceResult> {
        var serviceResult = new ServiceResult();
        try {
            const authors = await this.titleRepository.Remove(dtoRemove.id);
            serviceResult.data = authors;
        } catch (err) {
            serviceResult.message = `Error al intentar eliminar el autor: ${err}`;
            serviceResult.success = false;
        }
        return serviceResult;
    }
    async Update(dtoUpdate: TitleDtoUpdate): Promise<ServiceResult> {
        var serviceResult = new ServiceResult();
        const authorToUpdate = new Title();
        authorToUpdate.avance = dtoUpdate.avance;
        authorToUpdate.contrato = dtoUpdate.contrato;
        authorToUpdate.id_pub = dtoUpdate.id;
        authorToUpdate.notas = dtoUpdate.notas;
        authorToUpdate.precio = dtoUpdate.precio;
        authorToUpdate.tipo = dtoUpdate.tipo;
        authorToUpdate.titulo = dtoUpdate.titulo;
        authorToUpdate.total_ventas = dtoUpdate.total_ventas;
        //-----
        try {
            const authors = await this.titleRepository.Update(dtoUpdate.id, authorToUpdate);
            serviceResult.data = authors;
        } catch (err) {
            serviceResult.message = `Error al intentar actualizar el autor: ${err}`;
            serviceResult.success = false;
        }
        return serviceResult;
    }
    async Add(dtoAdd: TitleDtoAdd): Promise<ServiceResult> {
        var serviceResult = new ServiceResult();
        const authorToAdd = new Title();
        authorToAdd.contrato = dtoAdd.contrato;
        authorToAdd.id_pub = dtoAdd.id;
        authorToAdd.notas = dtoAdd.notas;
        authorToAdd.precio = dtoAdd.precio;
        authorToAdd.tipo = dtoAdd.tipo;
        authorToAdd.titulo = dtoAdd.titulo;
        authorToAdd.fecha_pub = dtoAdd.fecha_pub
        //----
        try {
            const authors = await this.titleRepository.Save(authorToAdd);
            serviceResult.data = authors;
        } catch (err) {
            serviceResult.message = `Error al intentar agregar el autor: ${err}`;
            serviceResult.success = false;
        }
        return serviceResult;
    }
    async GetCategories(): Promise<ServiceResult> {
        const serviceResult = new ServiceResult();
 
        try {
            const titles = await this.titleRepository.GetEntities({});
            const categories = await this.titleRepository.GetCategories();
            //recorriendo las categorias
             const  data = categories.map((category) => {
                //recorriendo los titulos
                const result = titles.filter((title)=>title.tipo === category.tipo);
                const dataFiltered = new TitleDtoGetCategories()
                dataFiltered.tipo = category.tipo;
                dataFiltered.titles = result;
                return dataFiltered;
            });
            serviceResult.data = data;
            serviceResult.message = "categorias obtenidas con exito";
        } catch (err) {
            serviceResult.success = false;
            serviceResult.message = `Error al intentar obtener las categorias ${err}`;
        }

        return serviceResult;
    }
}


export default TitleService;

