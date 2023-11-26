"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BaseDto_1 = __importDefault(require("../BaseDto"));
class AuthorDtoBase extends BaseDto_1.default {
    apellido;
    nombre;
    telefono;
    direccion;
    ciudad;
    estado;
    pais;
    cod_postal;
}
exports.default = AuthorDtoBase;
