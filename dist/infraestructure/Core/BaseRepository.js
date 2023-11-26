"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const LibraryContext_1 = __importDefault(require("../context/LibraryContext"));
class BaseRepository {
    ctx;
    rep;
    constructor(options, entity) {
        this.ctx = new LibraryContext_1.default(options);
        this.rep = this.ctx.getRepository(entity);
        this.ctx.initialize()
            .then((msj) => { console.log("Conectado"); })
            .catch((err) => { console.log(`Error: ${err}`); });
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
        return this.rep.findOneOrFail({});
    }
}
exports.default = BaseRepository;
