import BaseTitles from "../core/BaseTitles";
import { Column, Entity } from "typeorm";


@Entity({ name: "titulos" })
export default class Title extends BaseTitles {
    @Column()
    titulo: string

    @Column()
    tipo: string

    @Column()
    id_pub: string

    @Column()
    precio: number

    @Column()
    avance: number

    @Column()
    total_ventas: number

    @Column()
    notas: string

    @Column()
    fecha_pub: Date

    @Column()
    contrato: string
}