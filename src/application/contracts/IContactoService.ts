import IBaseService from "../core/IBaseService";
import ContactoDtoAdd from "../dto/Contacto/ContactoDtoAdd";
import ContactoDtoRemove from "../dto/Contacto/ContactoDtoRemove";
import ContactoDtoUpdate from "../dto/Contacto/ContactoDtoUpdate";

interface IContactoService extends IBaseService<ContactoDtoAdd,ContactoDtoRemove,ContactoDtoUpdate>{

}


export default IContactoService;