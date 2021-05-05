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
        this.router.get('/consulta1', indexController_1.default.consulta1);
        this.router.get('/consulta2', indexController_1.default.consulta2);
        this.router.get('/consulta3', indexController_1.default.consulta3);
        this.router.get('/consulta4', indexController_1.default.consulta4);
        this.router.get('/consulta5', indexController_1.default.consulta5);
    }
}
const indexRoutes = new IndexRoutes();
exports.default = indexRoutes.router;
