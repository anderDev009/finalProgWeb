import { Base } from "./BaseEntity";
import { PrimaryColumn } from "typeorm"
export default class BaseAuthor extends Base {
    @PrimaryColumn()
    id_autor: string
}