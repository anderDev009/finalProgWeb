"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Title_1 = __importDefault(require("../../domain/entities/Title"));
const ServiceResult_1 = __importDefault(require("../core/ServiceResult"));
const TitleDtoGetCategories_1 = __importDefault(require("../dto/Title/TitleDtoGetCategories"));
class TitleService {
    titleRepository;
    constructor(authorRep) {
        this.titleRepository = authorRep;
    }
    async GetAll() {
        var serviceResult = new ServiceResult_1.default();
        try {
            const authors = await this.titleRepository.GetEntities({});
            serviceResult.data = authors;
        }
        catch (err) {
            serviceResult.message = `Error intentando obtener los titulos: ${err}`;
            serviceResult.success = false;
        }
        return serviceResult;
    }
    async GetById(id) {
        var serviceResult = new ServiceResult_1.default();
        try {
            const author = await this.titleRepository.GetEntity(id);
            serviceResult.data = author;
        }
        catch (err) {
            serviceResult.message = `Error intentando obtener el titulo: ${err}`;
            serviceResult.success = false;
        }
        return serviceResult;
    }
    async Remove(dtoRemove) {
        var serviceResult = new ServiceResult_1.default();
        try {
            const authors = await this.titleRepository.Remove(dtoRemove.id);
            serviceResult.data = authors;
        }
        catch (err) {
            serviceResult.message = `Error al intentar eliminar el autor: ${err}`;
            serviceResult.success = false;
        }
        return serviceResult;
    }
    async Update(dtoUpdate) {
        var serviceResult = new ServiceResult_1.default();
        const authorToUpdate = new Title_1.default();
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
        }
        catch (err) {
            serviceResult.message = `Error al intentar actualizar el autor: ${err}`;
            serviceResult.success = false;
        }
        return serviceResult;
    }
    async Add(dtoAdd) {
        var serviceResult = new ServiceResult_1.default();
        const authorToAdd = new Title_1.default();
        authorToAdd.contrato = dtoAdd.contrato;
        authorToAdd.id_pub = dtoAdd.id;
        authorToAdd.notas = dtoAdd.notas;
        authorToAdd.precio = dtoAdd.precio;
        authorToAdd.tipo = dtoAdd.tipo;
        authorToAdd.titulo = dtoAdd.titulo;
        authorToAdd.fecha_pub = dtoAdd.fecha_pub;
        //----
        try {
            const authors = await this.titleRepository.Save(authorToAdd);
            serviceResult.data = authors;
        }
        catch (err) {
            serviceResult.message = `Error al intentar agregar el autor: ${err}`;
            serviceResult.success = false;
        }
        return serviceResult;
    }
    async GetCategories() {
        const serviceResult = new ServiceResult_1.default();
        try {
            const titles = await this.titleRepository.GetEntities({});
            const categories = await this.titleRepository.GetCategories();
            //recorriendo las categorias
            const data = categories.map((category) => {
                //recorriendo los titulos
                const result = titles.filter((title) => title.tipo === category.tipo);
                const dataFiltered = new TitleDtoGetCategories_1.default();
                dataFiltered.tipo = category.tipo;
                dataFiltered.titles = result;
                return dataFiltered;
            });
            serviceResult.data = data;
            serviceResult.message = "categorias obtenidas con exito";
        }
        catch (err) {
            serviceResult.success = false;
            serviceResult.message = `Error al intentar obtener las categorias ${err}`;
        }
        return serviceResult;
    }
}
exports.default = TitleService;
