"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ContactoService_1 = __importDefault(require("../../application/service/ContactoService"));
const ContactoRepository_1 = __importDefault(require("../../infraestructure/Repository/ContactoRepository"));
const config_1 = __importDefault(require("../config"));
const ContactoDtoAdd_1 = __importDefault(require("../../application/dto/Contacto/ContactoDtoAdd"));
const ContactoDtoUpdate_1 = __importDefault(require("../../application/dto/Contacto/ContactoDtoUpdate"));
const ContactoDtoRemove_1 = __importDefault(require("../../application/dto/Contacto/ContactoDtoRemove"));
const Contacto_1 = __importDefault(require("../../domain/entities/Contacto"));
const contactService = new ContactoService_1.default(new ContactoRepository_1.default({ ...config_1.default.connectionStrings.db_mysql }, Contacto_1.default));
const contactRouter = (0, express_1.Router)();
//obtener todos los autores
contactRouter.get("/contact", async (req, res) => {
    const result = await contactService.GetAll();
    res.status(200).json(result);
});
//obtener un autor
contactRouter.get("/contact", async (req, res) => {
    const { id } = req.body;
    const result = await contactService.GetById(id);
    res.status(200).json(result);
});
//metodo post
contactRouter.post("/contact", async (req, res) => {
    const { nombre, asunto, fecha, comentario, email, } = req.body;
    //-----
    const contactToAdd = new ContactoDtoAdd_1.default();
    contactToAdd.nombre = nombre;
    contactToAdd.asunto = asunto;
    contactToAdd.comentario = comentario;
    contactToAdd.fecha = fecha;
    contactToAdd.email = email;
    //---
    const result = await contactService.Add(contactToAdd);
    //--
    res.status(200).json(result);
});
//metodo update
contactRouter.put("/contact", async (req, res) => {
    const { id, nombre, asunto, fecha, comentario, } = req.body;
    //-----
    const contactToUpdate = new ContactoDtoUpdate_1.default();
    contactToUpdate.asunto = asunto;
    contactToUpdate.nombre = nombre;
    contactToUpdate.comentario = comentario;
    contactToUpdate.fecha = fecha;
    contactToUpdate.id = id;
    //---
    const result = await contactService.Update(contactToUpdate);
    //--
    res.status(200).json(result);
});
//metodo delete
contactRouter.delete("/contact", async (req, res) => {
    const { id } = req.body;
    const contactToDelete = new ContactoDtoRemove_1.default();
    contactToDelete.id = id;
    const result = await contactService.Remove(contactToDelete);
    res.status(200).json(result);
});
exports.default = contactRouter;
