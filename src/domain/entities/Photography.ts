import BaseAuthor from "../core/BaseAuthor";
import { Column } from "typeorm";

export default class Photografy extends BaseAuthor {
    @Column()
    fotografia: string
}