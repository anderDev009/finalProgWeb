"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BaseRepository_1 = __importDefault(require("../Core/BaseRepository"));
class AuthorRepository extends BaseRepository_1.default {
    constructor(options, entity) {
        super(options, entity);
    }
    async Save(entity) {
        await this.rep.save(entity);
    }
    async Update(id, entity) {
        await this.rep.update(id, entity);
    }
    async Remove(id) {
        const authorToRemove = await this.GetEntity(id);
        await this.rep.remove(authorToRemove);
    }
    async GetEntities(filter) {
        return await this.rep.find(filter);
    }
    async GetEntity(id) {
        return await this.rep.findOneByOrFail({ id_autor: id });
    }
}
exports.default = AuthorRepository;
