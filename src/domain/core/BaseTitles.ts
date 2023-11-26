import { Base } from "./BaseEntity";
import { PrimaryColumn } from "typeorm";

export default class BaseTitles extends Base {
    @PrimaryColumn()
    id_titulo: string
}