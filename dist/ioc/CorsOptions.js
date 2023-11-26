"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CorsOptionsDependency {
    static CorsOptions = {
        origin: 'https://nextjs-finalprogweb.vercel.app', // Sustituye variables
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
        credentials: true,
        optionsSuccessStatus: 200,
        allowedHeaders: 'Content-Type',
    };
}
exports.default = CorsOptionsDependency;
