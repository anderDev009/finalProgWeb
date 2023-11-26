"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Contacto_1 = __importDefault(require("../../domain/entities/Contacto"));
const ServiceResult_1 = __importDefault(require("../core/ServiceResult"));
const uuid_1 = require("uuid");
class ContactoService {
    contactoRepository;
    constructor(contactoRep) {
        this.contactoRepository = contactoRep;
    }
    async GetAll() {
        var serviceResult = new ServiceResult_1.default();
        try {
            const contactos = await this.contactoRepository.GetEntities({});
            serviceResult.data = contactos;
        }
        catch (err) {
            serviceResult.message = `Error intentando obtener los contactos: ${err}`;
            serviceResult.success = false;
        }
        return serviceResult;
    }
    async GetById(id) {
        var serviceResult = new ServiceResult_1.default();
        try {
            const author = await this.contactoRepository.GetEntity(id);
            serviceResult.data = author;
        }
        catch (err) {
            serviceResult.message = `Error intentando obtener el contacto: ${err}`;
            serviceResult.success = false;
        }
        return serviceResult;
        ;
    }
    async Remove(dtoRemove) {
        var serviceResult = new ServiceResult_1.default();
        try {
            const removeContact = await this.contactoRepository.Remove(dtoRemove.id);
            serviceResult.data = removeContact;
            serviceResult.message = `Removido correctamente`;
        }
        catch (err) {
            serviceResult.message = `Error al intentar eliminar el contacto: ${err}`;
            serviceResult.success = false;
        }
        return serviceResult;
    }
    async Update(dtoUpdate) {
        var serviceResult = new ServiceResult_1.default();
        const contactToUpdate = new Contacto_1.default();
        contactToUpdate.asunto = dtoUpdate.asunto;
        contactToUpdate.nombre = dtoUpdate.nombre;
        contactToUpdate.comentario = dtoUpdate.comentario;
        contactToUpdate.fecha = dtoUpdate.fecha;
        contactToUpdate.id = dtoUpdate.id;
        try {
            const authors = await this.contactoRepository.Update(dtoUpdate.id, contactToUpdate);
            serviceResult.data = authors;
        }
        catch (err) {
            serviceResult.message = `Error al intentar actualizar el contacto: ${err}`;
            serviceResult.success = false;
        }
        return serviceResult;
    }
    async Add(dtoAdd) {
        const id = (0, uuid_1.v4)();
        var serviceResult = new ServiceResult_1.default();
        const contactToAdd = new Contacto_1.default();
        contactToAdd.id = id;
        contactToAdd.nombre = dtoAdd.nombre;
        contactToAdd.asunto = dtoAdd.asunto;
        contactToAdd.comentario = dtoAdd.comentario;
        contactToAdd.fecha = dtoAdd.fecha;
        contactToAdd.email = dtoAdd.email;
        try {
            console.log(contactToAdd);
            const contact = await this.contactoRepository.Save(contactToAdd);
            serviceResult.data = contact;
        }
        catch (err) {
            serviceResult.message = `Error al intentar agregar el mensaje de contacto: ${err}`;
            serviceResult.success = false;
        }
        return serviceResult;
    }
}
exports.default = ContactoService;
