import { Router } from "express";
import ContactoService from "../../application/service/ContactoService";
import ContactoRepository from "../../infraestructure/Repository/ContactoRepository";
import config from "../config";
import ContactoDtoAdd from "../../application/dto/Contacto/ContactoDtoAdd";
import ContactoDtoUpdate from "../../application/dto/Contacto/ContactoDtoUpdate";
import ContactoDtoRemove from "../../application/dto/Contacto/ContactoDtoRemove";
import Contacto from "../../domain/entities/Contacto";

const contactService = new ContactoService(new ContactoRepository({ ...config.connectionStrings.db_mysql }, Contacto));
const contactRouter = Router();


//obtener todos los autores
contactRouter.get("/contact", async (req, res) => {
    const result = await contactService.GetAll();

    res.status(200).json(result);
})
//obtener un autor
contactRouter.get("/contact", async (req, res) => {
    const { id } = req.body;
    const result = await contactService.GetById(id);

    res.status(200).json(result);
})
//metodo post
contactRouter.post("/contact", async (req, res) => {
    const {
        nombre,
        asunto,
        fecha,
        comentario,
        email,
        } = req.body
    //-----

    const contactToAdd = new ContactoDtoAdd()
    contactToAdd.nombre =   nombre;
    contactToAdd.asunto = asunto;
    contactToAdd.comentario =  comentario;
    contactToAdd.fecha = fecha;
    contactToAdd.email = email;
    //---
    const result = await contactService.Add(contactToAdd);
    //--
    res.status(200).json(result);
})

//metodo update
contactRouter.put("/contact", async (req, res) => {
    const {
        id,
        nombre,
        asunto,
        fecha,
        comentario, } = req.body
    //-----
    const contactToUpdate = new ContactoDtoUpdate()
    contactToUpdate.asunto = asunto;
    contactToUpdate.nombre = nombre;
    contactToUpdate.comentario = comentario;
    contactToUpdate.fecha =  fecha;
    contactToUpdate.id =     id;

    //---
    const result = await contactService.Update(contactToUpdate);
    //--
    res.status(200).json(result);
})

//metodo delete
contactRouter.delete("/contact", async (req, res) => {
    const { id } = req.body;
    const contactToDelete = new ContactoDtoRemove();
    contactToDelete.id = id;
    const result = await contactService.Remove(contactToDelete);
    res.status(200).json(result);

})


export default contactRouter;