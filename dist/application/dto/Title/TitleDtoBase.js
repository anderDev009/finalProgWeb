"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BaseDto_1 = __importDefault(require("../BaseDto"));
class TitleDtoBase extends BaseDto_1.default {
    titulo;
    tipo;
    id_pub;
    precio;
    notas;
    contrato;
}
exports.default = TitleDtoBase;
