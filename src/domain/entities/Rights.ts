import { Column } from "typeorm";
import BaseTitles from "../core/BaseTitles";

export default class Rights extends BaseTitles {
    @Column()
    rango_bajo: number

    @Column()
    rango_alto: number

    @Column()
    derechos: number
}