"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
class LibraryContext extends typeorm_1.DataSource {
    constructor(options) {
        super(options);
    }
}
exports.default = LibraryContext;
