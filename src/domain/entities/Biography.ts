import { Entity } from "typeorm";
import BaseAuthor from "../core/BaseAuthor";
import { Column } from "typeorm"

@Entity({ name: "biografias" })
class Biography extends BaseAuthor {
    @Column()
    biografia: string
}

export default Biography