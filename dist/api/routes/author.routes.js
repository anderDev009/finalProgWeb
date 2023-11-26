"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const AuthorService_1 = __importDefault(require("../../application/service/AuthorService"));
const AuthorRepository_1 = __importDefault(require("../../infraestructure/Repository/AuthorRepository"));
const config_1 = __importDefault(require("../config"));
const AuthorDtoAdd_1 = __importDefault(require("../../application/dto/Author/AuthorDtoAdd"));
const AuthorDtoUpdate_1 = __importDefault(require("../../application/dto/Author/AuthorDtoUpdate"));
const AuthorDtoRemove_1 = __importDefault(require("../../application/dto/Author/AuthorDtoRemove"));
const Author_1 = __importDefault(require("../../domain/entities/Author"));
// config["connectionStrings"]["mysql"] 
const authorService = new AuthorService_1.default(new AuthorRepository_1.default({ ...config_1.default.connectionStrings.db_mysql }, Author_1.default));
const authorRouter = (0, express_1.Router)();
//obtener todos los autores
authorRouter.get("/authors", async (req, res) => {
    const result = await authorService.GetAll();
    res.status(200).json(result);
});
//obtener un autor
authorRouter.get("/author", async (req, res) => {
    const { id_autor } = req.body;
    const result = await authorService.GetById(id_autor);
    res.status(200).json(result);
});
//metodo post
authorRouter.post("/author", async (req, res) => {
    const { id_autor, nombre, apellido, ciudad, cod_postal, direccion, estado, pais, telefono } = req.body;
    //-----
    const authorToAdd = new AuthorDtoAdd_1.default();
    authorToAdd.id = id_autor;
    authorToAdd.nombre = nombre;
    authorToAdd.apellido = apellido;
    authorToAdd.ciudad = ciudad;
    authorToAdd.cod_postal = cod_postal;
    authorToAdd.direccion = direccion;
    authorToAdd.estado = estado;
    authorToAdd.pais = pais;
    authorToAdd.telefono = telefono;
    //---
    const result = await authorService.Add(authorToAdd);
    //--
    res.status(200).json(result);
});
//metodo update
authorRouter.put("/author", async (req, res) => {
    const { id_autor, nombre, apellido, ciudad, cod_postal, direccion, estado, pais, telefono } = req.body;
    //-----
    const authorToUpdate = new AuthorDtoUpdate_1.default();
    authorToUpdate.id = id_autor;
    authorToUpdate.nombre = nombre;
    authorToUpdate.apellido = apellido;
    authorToUpdate.ciudad = ciudad;
    authorToUpdate.cod_postal = cod_postal;
    authorToUpdate.direccion = direccion;
    authorToUpdate.estado = estado;
    authorToUpdate.pais = pais;
    authorToUpdate.telefono = telefono;
    //---
    const result = await authorService.Update(authorToUpdate);
    //--
    res.status(200).json(result);
});
//metodo delete
authorRouter.delete("/author", async (req, res) => {
    const { id_autor } = req.body;
    const authorToDelete = new AuthorDtoRemove_1.default();
    authorToDelete.id = id_autor;
    const result = await authorService.Remove(authorToDelete);
    res.status(200).json(result);
});
exports.default = authorRouter;
