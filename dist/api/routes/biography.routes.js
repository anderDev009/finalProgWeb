"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const BiographyService_1 = __importDefault(require("../../application/service/BiographyService"));
const Biography_1 = __importDefault(require("../../domain/entities/Biography"));
const BiographyRepository_1 = __importDefault(require("../../infraestructure/Repository/BiographyRepository"));
const config_1 = __importDefault(require("../config"));
const BiographyDtoAdd_1 = __importDefault(require("../../application/dto/Author/Biography/BiographyDtoAdd"));
const BiographyDtoUpdate_1 = __importDefault(require("../../application/dto/Author/Biography/BiographyDtoUpdate"));
const BiographyDtoRemove_1 = __importDefault(require("../../application/dto/Author/Biography/BiographyDtoRemove"));
const biographyService = new BiographyService_1.default(new BiographyRepository_1.default({ ...config_1.default.connectionStrings.db_mysql }, Biography_1.default));
const biographyRouter = (0, express_1.Router)();
//obtener todos los autores
biographyRouter.get("/biography", async (req, res) => {
    const result = await biographyService.GetAll();
    res.status(200).json(result);
});
//obtener un autor
biographyRouter.post("/biographyById", async (req, res) => {
    const { id } = req.body;
    const result = await biographyService.GetById(id);
    res.status(200).json(result);
});
//metodo post
biographyRouter.post("/biography", async (req, res) => {
    const { id, biografia, } = req.body;
    //-----
    const contactToAdd = new BiographyDtoAdd_1.default();
    contactToAdd.id = id;
    contactToAdd.biografia = biografia;
    //---
    const result = await biographyService.Add(contactToAdd);
    //--
    res.status(200).json(result);
});
//metodo update
biographyRouter.put("/biography", async (req, res) => {
    const { id, biografia, } = req.body;
    //-----
    const contactToUpdate = new BiographyDtoUpdate_1.default();
    contactToUpdate.biografia = biografia;
    contactToUpdate.id = id;
    //---
    const result = await biographyService.Update(contactToUpdate);
    //--
    res.status(200).json(result);
});
//metodo delete
biographyRouter.delete("/biography", async (req, res) => {
    const { id } = req.body;
    const contactToDelete = new BiographyDtoRemove_1.default();
    contactToDelete.id = id;
    const result = await biographyService.Remove(contactToDelete);
    res.status(200).json(result);
});
exports.default = biographyRouter;
