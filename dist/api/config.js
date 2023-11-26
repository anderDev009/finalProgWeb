"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Biography_1 = __importDefault(require("../domain/entities/Biography"));
const Author_1 = __importDefault(require("../domain/entities/Author"));
const Title_1 = __importDefault(require("../domain/entities/Title"));
const Contacto_1 = __importDefault(require("../domain/entities/Contacto"));
// Biography, Rights, Title, Photografyc
const entities = [Author_1.default, Title_1.default, Contacto_1.default, Biography_1.default];
const db_mysql = {
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "mysql",
    database: "proyecto_final_prog_web",
    entities: entities
};
const config = {
    connectionStrings: {
        db_mysql
    }
};
exports.default = config;
