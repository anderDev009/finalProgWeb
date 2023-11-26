"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CorsOptionsDependency {
    static CorsOptions = {
        origin: 'http://localhost:3000', // Sustituye variables
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
        credentials: true,
        optionsSuccessStatus: 200,
        allowedHeaders: 'Content-Type',
    };
}
exports.default = CorsOptionsDependency;
