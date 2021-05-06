"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const indexController_1 = __importDefault(require("../controllers/indexController"));
class IndexRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', indexController_1.default.index);
        this.router.post('/consulta1', indexController_1.default.consulta1);
        this.router.post('/consulta21', indexController_1.default.consulta21);
        this.router.post('/consulta22', indexController_1.default.consulta22);
        this.router.post('/consulta3', indexController_1.default.consulta3);
        this.router.post('/consulta4', indexController_1.default.consulta4);
        this.router.post('/consulta5', indexController_1.default.consulta5);
        this.router.post('/RegistroCuentahabiente', indexController_1.default.registrarCuentahabiente);
        this.router.post('/RegistroInstitucionBancaria', indexController_1.default.registrarInstitucion);
    }
}
const indexRoutes = new IndexRoutes();
exports.default = indexRoutes.router;
