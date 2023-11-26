import AuthorRepository from "../../infraestructure/Repository/AuthorRepository";
import IAuthorService from "../contracts/IAuthorService";
import ServiceResult from "../core/ServiceResult";
import AuthorDtoAdd from "../dto/Author/AuthorDtoAdd";
import AuthorDtoRemove from "../dto/Author/AuthorDtoRemove";
import AuthorDtoUpdate from "../dto/Author/AuthorDtoUpdate";
import Author from "../../domain/entities/Author";

class AuthorService implements IAuthorService {
    private readonly authorRepository: AuthorRepository

    constructor(authorRep: AuthorRepository) {
        this.authorRepository = authorRep;
    }
    async GetAll(): Promise<ServiceResult> {
        var serviceResult = new ServiceResult();
        try {
            const authors = await this.authorRepository.GetEntities({});
            serviceResult.data = authors;
        } catch (err) {
            serviceResult.message = `Error intentando obtener los autores: ${err}`;
            serviceResult.success = false;
        }
        return serviceResult;
    }
    async GetById(id: string): Promise<ServiceResult> {
        var serviceResult = new ServiceResult();
        try {
            const author = await this.authorRepository.GetEntity(id);
            serviceResult.data = author;
        } catch (err) {
            serviceResult.message = `Error intentando obtener el autor: ${err}`;
            serviceResult.success = false;
        }
        return serviceResult;;
    }
    async Remove(dtoRemove: AuthorDtoRemove): Promise<ServiceResult> {
        var serviceResult = new ServiceResult();
        try {
            const authors = await this.authorRepository.Remove(dtoRemove.id);
            serviceResult.data = authors;
        } catch (err) {
            serviceResult.message = `Error al intentar eliminar el autor: ${err}`;
            serviceResult.success = false;
        }
        return serviceResult;
    }
    async Update(dtoUpdate: AuthorDtoUpdate): Promise<ServiceResult> {
        var serviceResult = new ServiceResult();
        const authorToUpdate = new Author();
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
        } catch (err) {
            serviceResult.message = `Error al intentar actualizar el autor: ${err}`;
            serviceResult.success = false;
        }
        return serviceResult;
    }
    async Add(dtoAdd: AuthorDtoAdd): Promise<ServiceResult> {
        var serviceResult = new ServiceResult();
        const authorToAdd = new Author();
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
        } catch (err) {
            serviceResult.message = `Error al intentar agregar el autor: ${err}`;
            serviceResult.success = false;
        }
        return serviceResult;
    }

}

export default AuthorService;