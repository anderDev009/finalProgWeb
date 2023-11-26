import { Entity } from "typeorm";
import BaseAuthor from "../core/BaseAuthor";
import { Column } from "typeorm";


@Entity({ name: "autores" })
class Author extends BaseAuthor {
    @Column()
    nombre: string

    @Column()
    apellido: string

    @Column()
    telefono: string

    @Column()
    direccion: string

    @Column()
    ciudad: string

    @Column()
    estado: string

    @Column()
    pais: string

    @Column()
    cod_postal: number
}

export default Author