"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ServiceResult_1 = __importDefault(require("../core/ServiceResult"));
const Author_1 = __importDefault(require("../../domain/entities/Author"));
class AuthorService {
    authorRepository;
    constructor(authorRep) {
        this.authorRepository = authorRep;
    }
    async GetAll() {
        var serviceResult = new ServiceResult_1.default();
        try {
            const authors = await this.authorRepository.GetEntities({});
            serviceResult.data = authors;
        }
        catch (err) {
            serviceResult.message = `Error intentando obtener los autores: ${err}`;
            serviceResult.success = false;
        }
        return serviceResult;
    }
    async GetById(id) {
        var serviceResult = new ServiceResult_1.default();
        try {
            const author = await this.authorRepository.GetEntity(id);
            serviceResult.data = author;
        }
        catch (err) {
            serviceResult.message = `Error intentando obtener el autor: ${err}`;
            serviceResult.success = false;
        }
        return serviceResult;
        ;
    }
    async Remove(dtoRemove) {
        var serviceResult = new ServiceResult_1.default();
        try {
            const authors = await this.authorRepository.Remove(dtoRemove.id);
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
        const authorToUpdate = new Author_1.default();
        authorToUpdate.nombre = dtoUpdate.nombre;
        authorToUpdate.apellido = dtoUpdate.apellido;
        authorToUpdate.ciudad = dtoUpdate.ciudad;
        authorToUpdate.cod_postal = dtoUpdate.cod_postal;
        authorToUpdate.direccion = dtoUpdate.direccion;
        authorToUpdate.estado = dtoUpdate.estado;
        authorToUpdate.pais = dtoUpdate.pais;
        authorToUpdate.telefono = dtoUpdate.telefono;
        try {
            const authors = await this.authorRepository.Update(dtoUpdate.id, authorToUpdate);
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
        const authorToAdd = new Author_1.default();
        authorToAdd.id_autor = dtoAdd.id;
        authorToAdd.nombre = dtoAdd.nombre;
        authorToAdd.apellido = dtoAdd.apellido;
        authorToAdd.ciudad = dtoAdd.ciudad;
        authorToAdd.cod_postal = dtoAdd.cod_postal;
        authorToAdd.direccion = dtoAdd.direccion;
        authorToAdd.estado = dtoAdd.estado;
        authorToAdd.pais = dtoAdd.pais;
        authorToAdd.telefono = dtoAdd.telefono;
        try {
            const authors = await this.authorRepository.Save(authorToAdd);
            serviceResult.data = authors;
        }
        catch (err) {
            serviceResult.message = `Error al intentar agregar el autor: ${err}`;
            serviceResult.success = false;
        }
        return serviceResult;
    }
}
exports.default = AuthorService;
