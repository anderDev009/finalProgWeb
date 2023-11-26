"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const TitleService_1 = __importDefault(require("../../application/service/TitleService"));
const TitleRepository_1 = __importDefault(require("../../infraestructure/Repository/TitleRepository"));
const config_1 = __importDefault(require("../config"));
const Title_1 = __importDefault(require("../../domain/entities/Title"));
const TitleDtoAdd_1 = __importDefault(require("../../application/dto/Title/TitleDtoAdd"));
const TitleDtoUpdate_1 = __importDefault(require("../../application/dto/Title/TitleDtoUpdate"));
const TitleDtoRemove_1 = __importDefault(require("../../application/dto/Title/TitleDtoRemove"));
const titleService = new TitleService_1.default(new TitleRepository_1.default({ ...config_1.default.connectionStrings.db_mysql }, Title_1.default));
const titleRouter = (0, express_1.Router)();
titleRouter.get("/titles", async (req, res) => {
    const result = await titleService.GetAll();
    res.status(200).json(result);
});
titleRouter.get("/title", async (req, res) => {
    const { id_autor } = req.body;
    const result = await titleService.GetById(id_autor);
    res.status(200).json(result);
});
//metodo post
titleRouter.post("/title", async (req, res) => {
    const { id, id_pub, notas, precio, tipo, titulo, fecha_pub, } = req.body;
    //-----
    const titleDtoAdd = new TitleDtoAdd_1.default();
    titleDtoAdd.id_pub = id_pub;
    titleDtoAdd.contrato = id;
    titleDtoAdd.id_pub = id;
    titleDtoAdd.notas = notas;
    titleDtoAdd.precio = precio;
    titleDtoAdd.tipo = tipo;
    titleDtoAdd.titulo = titulo;
    titleDtoAdd.fecha_pub = fecha_pub;
    //---
    const result = await titleService.Add(titleDtoAdd);
    //--
    res.status(200).json(result);
});
//metodo update
titleRouter.put("/title", async (req, res) => {
    const { id, id_pub, notas, precio, tipo, titulo, total_ventas, contrato, avance } = req.body;
    //-----
    const titleToUpdate = new TitleDtoUpdate_1.default();
    titleToUpdate.id = id;
    titleToUpdate.avance = avance;
    titleToUpdate.contrato = contrato;
    titleToUpdate.id_pub = id_pub;
    titleToUpdate.notas = notas;
    titleToUpdate.precio = precio;
    titleToUpdate.tipo = tipo;
    titleToUpdate.titulo = titulo;
    titleToUpdate.total_ventas = total_ventas;
    //---
    const result = await titleService.Update(titleToUpdate);
    //--
    res.status(200).json(result);
});
//metodo delete
titleRouter.delete("/title", async (req, res) => {
    const { id } = req.body;
    const titleToRemove = new TitleDtoRemove_1.default();
    titleToRemove.id = id;
    const result = await titleService.Remove(titleToRemove);
    res.status(200).json(result);
});
//obtener categorias 
titleRouter.get("/titles/categories", async (req, res) => {
    const result = await titleService.GetCategories();
    res.status(200).json(result);
});
exports.default = titleRouter;
