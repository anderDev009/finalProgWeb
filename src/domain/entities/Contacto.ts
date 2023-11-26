import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity({ name: "contacto" })
class Contacto {
    @PrimaryColumn()
    id: string;

    @Column()
    nombre: string;

    @Column()
    asunto: string;

    @Column()
    comentario: string;

    @Column()
    fecha: Date;

    @Column()
    email: string
}

export default Contacto;