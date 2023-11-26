"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const CorsOptions_1 = __importDefault(require("./CorsOptions"));
class ServerDependency {
    static InyectDependency(app) {
        app.use((0, express_1.json)());
        app.use((0, morgan_1.default)("dev"));
        app.use((0, cors_1.default)(CorsOptions_1.default.CorsOptions));
    }
}
exports.default = ServerDependency;
