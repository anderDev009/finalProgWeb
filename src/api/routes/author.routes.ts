import { Router } from "express";
import AuthorService from "../../application/service/AuthorService";
import AuthorRepository from "../../infraestructure/Repository/AuthorRepository";
import config from "../config";
import AuthorDtoAdd from "../../application/dto/Author/AuthorDtoAdd";
import AuthorDtoUpdate from "../../application/dto/Author/AuthorDtoUpdate";
import AuthorDtoRemove from "../../application/dto/Author/AuthorDtoRemove";
import Author from "../../domain/entities/Author";
// config["connectionStrings"]["mysql"] 

const authorService = new AuthorService(new AuthorRepository({ ...config.connectionStrings.db_mysql }, Author));
const authorRouter = Router();


//obtener todos los autores
authorRouter.get("/authors", async (req, res) => {
    const result = await authorService.GetAll();

    res.status(200).json(result);
})
//obtener un autor
authorRouter.get("/author", async (req, res) => {
    const { id_autor } = req.body;
    const result = await authorService.GetById(id_autor);

    res.status(200).json(result);
})
//metodo post
authorRouter.post("/author", async (req, res) => {
    const { id_autor,
        nombre,
        apellido,
        ciudad,
        cod_postal,
        direccion,
        estado,
        pais,
        telefono } = req.body
    //-----
    const authorToAdd = new AuthorDtoAdd()
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
})

//metodo update
authorRouter.put("/author", async (req, res) => {
    const {
        id_autor,
        nombre,
        apellido,
        ciudad,
        cod_postal,
        direccion,
        estado,
        pais,
        telefono } = req.body
    //-----
    const authorToUpdate = new AuthorDtoUpdate()
    authorToUpdate.id = id_autor
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
})

//metodo delete
authorRouter.delete("/author", async (req, res) => {
    const { id_autor } = req.body;
    const authorToDelete = new AuthorDtoRemove();
    authorToDelete.id = id_autor;
    const result = await authorService.Remove(authorToDelete);
    res.status(200).json(result);

})


export default authorRouter;