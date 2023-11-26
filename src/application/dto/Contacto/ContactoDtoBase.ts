import BaseDto from "../BaseDto";

class ContactoDtoBase extends BaseDto{
    nombre : string;

    asunto : string;
    
    comentario : string;

    fecha : Date;

    email : string
}

export default ContactoDtoBase;