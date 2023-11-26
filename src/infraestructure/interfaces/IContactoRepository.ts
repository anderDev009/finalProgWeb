import Contacto from "../../domain/entities/Contacto";
import IBaseRepository from "../Core/IBaseRepository";

interface IContactoRepository extends IBaseRepository<Contacto>{

}


export default IContactoRepository;