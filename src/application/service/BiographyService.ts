import Biography from "../../domain/entities/Biography";
import BiographyRepository from "../../infraestructure/Repository/BiographyRepository";
import IBiographyService from "../contracts/IBiographyService";
import ServiceResult from "../core/ServiceResult";
import BiographyDtoAdd from "../dto/Author/Biography/BiographyDtoAdd";
import BiographyDtoRemove from "../dto/Author/Biography/BiographyDtoRemove";
import BiographyDtoUpdate from "../dto/Author/Biography/BiographyDtoUpdate";

class BiographyService implements IBiographyService {
    private readonly biographyRepository: BiographyRepository;

    constructor(contactoRep: BiographyRepository) {
        this.biographyRepository = contactoRep;
    }
    async GetAll(): Promise<ServiceResult> {
        var serviceResult = new ServiceResult();
        try {
            const biography = await this.biographyRepository.GetEntities({});
            serviceResult.data = biography;
        } catch (err) {
            serviceResult.message = `Error intentando obtener las biografias: ${err}`;
            serviceResult.success = false;
        }
        return serviceResult;
    }
    async GetById(id: string): Promise<ServiceResult> {
        var serviceResult = new ServiceResult();
        try {
            const biography = await this.biographyRepository.GetEntity(id);
            serviceResult.data = biography;
        } catch (err) {
            serviceResult.message = `Error intentando obtener la biografia: ${err}`;
            serviceResult.success = false;
        }
        return serviceResult;;
    }
    async Remove(dtoRemove: BiographyDtoRemove): Promise<ServiceResult> {
        var serviceResult = new ServiceResult();
        try {
            const removeContact = await this.biographyRepository.Remove(dtoRemove.id);
            serviceResult.data = removeContact;
            serviceResult.message = `Removido correctamente`;
        } catch (err) {
            serviceResult.message = `Error al intentar eliminar la biografia: ${err}`;
            serviceResult.success = false;
        }
        return serviceResult;
    }
    async Update(dtoUpdate: BiographyDtoUpdate): Promise<ServiceResult> {
        var serviceResult = new ServiceResult();
        const contactToUpdate = new Biography();
        contactToUpdate.biografia = dtoUpdate.biografia;
        contactToUpdate.id_autor = dtoUpdate.id;
        try {
            const authors = await this.biographyRepository.Update(dtoUpdate.id, contactToUpdate);
            serviceResult.data = authors;
        } catch (err) {
            serviceResult.message = `Error al intentar actualizar la biografia: ${err}`;
            serviceResult.success = false;
        }
        return serviceResult;
    }
    async Add(dtoAdd: BiographyDtoAdd): Promise<ServiceResult> {
        var serviceResult = new ServiceResult();
        const contactToAdd = new Biography();
        contactToAdd.id_autor = contactToAdd.id_autor;
        contactToAdd.biografia = dtoAdd.biografia;
        try {
            console.log(contactToAdd);

            const contact = await this.biographyRepository.Save(contactToAdd);
            serviceResult.data = contact;
        } catch (err) {
            serviceResult.message = `Error al intentar agregar la biografia: ${err}`;
            serviceResult.success = false;
        }
        return serviceResult;
    }
}
export default BiographyService;