"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const TitleDtoBase_1 = __importDefault(require("./TitleDtoBase"));
class TitleDtoUpdate extends TitleDtoBase_1.default {
    avance;
    total_ventas;
}
exports.default = TitleDtoUpdate;
