import Contacto from "../../domain/entities/Contacto";
import ContactoRepository from "../../infraestructure/Repository/ContactoRepository";
import IContactoService from "../contracts/IContactoService";
import ServiceResult from "../core/ServiceResult";
import ContactoDtoAdd from "../dto/Contacto/ContactoDtoAdd";
import ContactoDtoRemove from "../dto/Contacto/ContactoDtoRemove";
import ContactoDtoUpdate from "../dto/Contacto/ContactoDtoUpdate";
import { v4 } from "uuid"

class ContactoService implements IContactoService {
    private readonly contactoRepository: ContactoRepository

    constructor(contactoRep: ContactoRepository) {
        this.contactoRepository = contactoRep;
    }
    async GetAll(): Promise<ServiceResult> {
        var serviceResult = new ServiceResult();
        try {
            const contactos = await this.contactoRepository.GetEntities({});
            serviceResult.data = contactos;
        } catch (err) {
            serviceResult.message = `Error intentando obtener los contactos: ${err}`;
            serviceResult.success = false;
        }
        return serviceResult;
    }
    async GetById(id: string): Promise<ServiceResult> {
        var serviceResult = new ServiceResult();
        try {
            const author = await this.contactoRepository.GetEntity(id);
            serviceResult.data = author;
        } catch (err) {
            serviceResult.message = `Error intentando obtener el contacto: ${err}`;
            serviceResult.success = false;
        }
        return serviceResult;;
    }
    async Remove(dtoRemove: ContactoDtoRemove): Promise<ServiceResult> {
        var serviceResult = new ServiceResult();
        try {
            const removeContact = await this.contactoRepository.Remove(dtoRemove.id);
            serviceResult.data = removeContact;
            serviceResult.message = `Removido correctamente`;
        } catch (err) {
            serviceResult.message = `Error al intentar eliminar el contacto: ${err}`;
            serviceResult.success = false;
        }
        return serviceResult;
    }
    async Update(dtoUpdate: ContactoDtoUpdate): Promise<ServiceResult> {
        var serviceResult = new ServiceResult();
        const contactToUpdate = new Contacto();
        contactToUpdate.asunto = dtoUpdate.asunto;
        contactToUpdate.nombre = dtoUpdate.nombre;
        contactToUpdate.comentario = dtoUpdate.comentario;
        contactToUpdate.fecha = dtoUpdate.fecha;
        contactToUpdate.id = dtoUpdate.id;

        try {
            const authors = await this.contactoRepository.Update(dtoUpdate.id, contactToUpdate);
            serviceResult.data = authors;
        } catch (err) {
            serviceResult.message = `Error al intentar actualizar el contacto: ${err}`;
            serviceResult.success = false;
        }
        return serviceResult;
    }
    async Add(dtoAdd: ContactoDtoAdd): Promise<ServiceResult> {
        const id = v4()
        var serviceResult = new ServiceResult();
        const contactToAdd = new Contacto();
        contactToAdd.id = id;
        contactToAdd.nombre = dtoAdd.nombre;
        contactToAdd.asunto = dtoAdd.asunto;
        contactToAdd.comentario = dtoAdd.comentario;
        contactToAdd.fecha = dtoAdd.fecha;
        contactToAdd.email = dtoAdd.email
        try {
            console.log(contactToAdd);

            const contact = await this.contactoRepository.Save(contactToAdd);
            serviceResult.data = contact;
        } catch (err) {
            serviceResult.message = `Error al intentar agregar el mensaje de contacto: ${err}`;
            serviceResult.success = false;
        }
        return serviceResult;
    }
}
export default ContactoService;