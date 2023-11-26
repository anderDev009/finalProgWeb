"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BaseTitles_1 = __importDefault(require("../core/BaseTitles"));
const typeorm_1 = require("typeorm");
let Title = class Title extends BaseTitles_1.default {
    titulo;
    tipo;
    id_pub;
    precio;
    avance;
    total_ventas;
    notas;
    fecha_pub;
    contrato;
};
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Title.prototype, "titulo", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Title.prototype, "tipo", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Title.prototype, "id_pub", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Title.prototype, "precio", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Title.prototype, "avance", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Title.prototype, "total_ventas", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Title.prototype, "notas", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], Title.prototype, "fecha_pub", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Title.prototype, "contrato", void 0);
Title = __decorate([
    (0, typeorm_1.Entity)({ name: "titulos" })
], Title);
exports.default = Title;
