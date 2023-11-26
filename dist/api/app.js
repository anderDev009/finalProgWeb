"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importStar(require("express"));
const ServerDependency_1 = __importDefault(require("../ioc/ServerDependency"));
const author_routes_1 = __importDefault(require("./routes/author.routes"));
const title_routes_1 = __importDefault(require("./routes/title.routes"));
const contacto_routes_1 = __importDefault(require("./routes/contacto.routes"));
const biography_routes_1 = __importDefault(require("./routes/biography.routes"));
const app = (0, express_1.default)();
const port = 3001;
const router = (0, express_1.Router)();
//dependencias
ServerDependency_1.default.InyectDependency(app);
//routers
router.use(author_routes_1.default);
router.use(title_routes_1.default);
router.use(contacto_routes_1.default);
router.use(biography_routes_1.default);
//------
app.use("/v1", router);
//
app.listen(port, () => console.log(`Server on port: ${port}`));
