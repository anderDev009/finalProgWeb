"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Biography_1 = __importDefault(require("../../domain/entities/Biography"));
const ServiceResult_1 = __importDefault(require("../core/ServiceResult"));
class BiographyService {
    biographyRepository;
    constructor(contactoRep) {
        this.biographyRepository = contactoRep;
    }
    async GetAll() {
        var serviceResult = new ServiceResult_1.default();
        try {
            const biography = await this.biographyRepository.GetEntities({});
            serviceResult.data = biography;
        }
        catch (err) {
            serviceResult.message = `Error intentando obtener las biografias: ${err}`;
            serviceResult.success = false;
        }
        return serviceResult;
    }
    async GetById(id) {
        var serviceResult = new ServiceResult_1.default();
        try {
            const biography = await this.biographyRepository.GetEntity(id);
            serviceResult.data = biography;
        }
        catch (err) {
            serviceResult.message = `Error intentando obtener la biografia: ${err}`;
            serviceResult.success = false;
        }
        return serviceResult;
        ;
    }
    async Remove(dtoRemove) {
        var serviceResult = new ServiceResult_1.default();
        try {
            const removeContact = await this.biographyRepository.Remove(dtoRemove.id);
            serviceResult.data = removeContact;
            serviceResult.message = `Removido correctamente`;
        }
        catch (err) {
            serviceResult.message = `Error al intentar eliminar la biografia: ${err}`;
            serviceResult.success = false;
        }
        return serviceResult;
    }
    async Update(dtoUpdate) {
        var serviceResult = new ServiceResult_1.default();
        const contactToUpdate = new Biography_1.default();
        contactToUpdate.biografia = dtoUpdate.biografia;
        contactToUpdate.id_autor = dtoUpdate.id;
        try {
            const authors = await this.biographyRepository.Update(dtoUpdate.id, contactToUpdate);
            serviceResult.data = authors;
        }
        catch (err) {
            serviceResult.message = `Error al intentar actualizar la biografia: ${err}`;
            serviceResult.success = false;
        }
        return serviceResult;
    }
    async Add(dtoAdd) {
        var serviceResult = new ServiceResult_1.default();
        const contactToAdd = new Biography_1.default();
        contactToAdd.id_autor = contactToAdd.id_autor;
        contactToAdd.biografia = dtoAdd.biografia;
        try {
            console.log(contactToAdd);
            const contact = await this.biographyRepository.Save(contactToAdd);
            serviceResult.data = contact;
        }
        catch (err) {
            serviceResult.message = `Error al intentar agregar la biografia: ${err}`;
            serviceResult.success = false;
        }
        return serviceResult;
    }
}
exports.default = BiographyService;
