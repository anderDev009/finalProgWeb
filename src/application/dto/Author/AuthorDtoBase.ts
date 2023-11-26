import BaseDto from "../BaseDto"

class AuthorDtoBase extends BaseDto {
    apellido: string
    nombre: string
    telefono: string
    direccion: string
    ciudad: string
    estado: string
    pais: string
    cod_postal: number
}

export default AuthorDtoBase