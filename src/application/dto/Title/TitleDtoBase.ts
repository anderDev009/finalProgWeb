import BaseDto from "../BaseDto";

class TitleDtoBase extends BaseDto {
    titulo: string;
    tipo: string;
    id_pub: string;
    precio: number;
    notas: string;
    contrato: string
}

export default TitleDtoBase;