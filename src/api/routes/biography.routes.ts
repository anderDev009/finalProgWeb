import { Router } from "express";
import BiographyService from "../../application/service/BiographyService";
import Biography from "../../domain/entities/Biography";
import BiographyRepository from "../../infraestructure/Repository/BiographyRepository";
import config from "../config";
import BiographyDtoAdd from "../../application/dto/Author/Biography/BiographyDtoAdd";
import BiographyDtoUpdate from "../../application/dto/Author/Biography/BiographyDtoUpdate";
import BiographyDtoRemove from "../../application/dto/Author/Biography/BiographyDtoRemove";

const biographyService = new BiographyService(new BiographyRepository({ ...config.connectionStrings.db_mysql }, Biography));
const biographyRouter = Router();


//obtener todos los autores
biographyRouter.get("/biography", async (req, res) => {
    const result = await biographyService.GetAll();

    res.status(200).json(result);
})
//obtener un autor
biographyRouter.post("/biographyById", async (req, res) => {
    const { id } = req.body;
    const result = await biographyService.GetById(id);

    res.status(200).json(result);
})
//metodo post
biographyRouter.post("/biography", async (req, res) => {
    const {
        id,
        biografia,
    } = req.body
    //-----

    const contactToAdd = new BiographyDtoAdd()
    contactToAdd.id = id;
    contactToAdd.biografia = biografia;
    //---
    const result = await biographyService.Add(contactToAdd);
    //--
    res.status(200).json(result);
})

//metodo update
biographyRouter.put("/biography", async (req, res) => {
    const {
        id,
        biografia,
    } = req.body
    //-----
    const contactToUpdate = new BiographyDtoUpdate()
    contactToUpdate.biografia = biografia;
    contactToUpdate.id = id;

    //---
    const result = await biographyService.Update(contactToUpdate);
    //--
    res.status(200).json(result);
})

//metodo delete
biographyRouter.delete("/biography", async (req, res) => {
    const { id } = req.body;
    const contactToDelete = new BiographyDtoRemove();
    contactToDelete.id = id;
    const result = await biographyService.Remove(contactToDelete);
    res.status(200).json(result);

})


export default biographyRouter;