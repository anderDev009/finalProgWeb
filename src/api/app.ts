import Express, { Router } from "express";
import ServerDependency from "../ioc/ServerDependency";
import AuthorRouter from "./routes/author.routes";
import titleRouter from "./routes/title.routes";
import contactRouter from "./routes/contacto.routes";
import biographyRouter from "./routes/biography.routes";

const app = Express();
const port = 3001;
const router = Router();
//dependencias

ServerDependency.InyectDependency(app);
//routers
router.use(AuthorRouter);
router.use(titleRouter);
router.use(contactRouter);
router.use(biographyRouter)
//------
app.use("/v1", router);

//


app.listen(port, () => console.log(`Server on port: ${port}`));
