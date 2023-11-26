import { Express, json } from "express";
import morgan from "morgan";
import cors from "cors"
import CorsOptionsDependency from "./CorsOptions";
class ServerDependency {

    static InyectDependency(app: Express) {
        app.use(json());
        app.use(morgan("dev"));
        app.use(cors(CorsOptionsDependency.CorsOptions));
    }
}

export default ServerDependency