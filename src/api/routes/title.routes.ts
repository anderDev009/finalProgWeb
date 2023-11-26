import { Router } from "express";
import TitleService from "../../application/service/TitleService";
import TitleRepository from "../../infraestructure/Repository/TitleRepository";
import config from "../config";
import Title from "../../domain/entities/Title";
import TitleDtoAdd from "../../application/dto/Title/TitleDtoAdd";
import TitleDtoUpdate from "../../application/dto/Title/TitleDtoUpdate";
import AuthorDtoRemove from "../../application/dto/Author/AuthorDtoRemove";
import TitleDtoRemove from "../../application/dto/Title/TitleDtoRemove";

const titleService = new TitleService(new TitleRepository({ ...config.connectionStrings.db_mysql }, Title));

const titleRouter = Router();



titleRouter.get("/titles", async (req, res) => {
    const result = await titleService.GetAll();

    res.status(200).json(result);
})
titleRouter.get("/title", async (req, res) => {
    const { id_autor } = req.body;
    const result = await titleService.GetById(id_autor);

    res.status(200).json(result);
})
//metodo post
titleRouter.post("/title", async (req, res) => {
    const { id,
        id_pub,
        notas,
        precio,
        tipo,
        titulo,
        fecha_pub,
    } = req.body
    //-----
    const titleDtoAdd = new TitleDtoAdd()
    titleDtoAdd.id_pub = id_pub;
    titleDtoAdd.contrato = id;
    titleDtoAdd.id_pub = id;
    titleDtoAdd.notas = notas;
    titleDtoAdd.precio = precio;
    titleDtoAdd.tipo = tipo;
    titleDtoAdd.titulo = titulo;
    titleDtoAdd.fecha_pub = fecha_pub
    //---
    const result = await titleService.Add(titleDtoAdd);
    //--
    res.status(200).json(result);
})

//metodo update
titleRouter.put("/title", async (req, res) => {
    const {
        id,
        id_pub,
        notas,
        precio,
        tipo,
        titulo,
        total_ventas,
        contrato,
        avance } = req.body
    //-----
    const titleToUpdate = new TitleDtoUpdate()
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
})

//metodo delete
titleRouter.delete("/title", async (req, res) => {
    const { id } = req.body;
    const titleToRemove = new TitleDtoRemove();
    titleToRemove.id = id;
    const result = await titleService.Remove(titleToRemove);
    res.status(200).json(result);

})

//obtener categorias 
titleRouter.get("/titles/categories", async (req, res) => {
    const result = await titleService.GetCategories();
    res.status(200).json(result);
})
export default titleRouter;

