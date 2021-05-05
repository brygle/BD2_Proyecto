"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class IndexController {
    index(req, res) {
        res.send("Hello");
    }
    consulta1(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //await cliente.connect()
            const query = 'select * from cuentahabientes;';
            const rs = yield database_1.default.execute(query);
            //await cliente.shutdown();
            res.json(rs.rows);
        });
    }
    consulta2(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //await cliente.connect()
            const query = 'select * from cuentahabientes;';
            const rs = yield database_1.default.execute(query);
            //await cliente.shutdown();
            res.json(rs.rows);
        });
    }
    consulta3(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //await cliente.connect()
            const query = 'select * from cuentahabientes;';
            const rs = yield database_1.default.execute(query);
            //await cliente.shutdown();
            res.json(rs.rows);
        });
    }
    consulta4(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //await cliente.connect()
            const query = 'select * from cuentahabientes;';
            const rs = yield database_1.default.execute(query);
            //await cliente.shutdown();
            res.json(rs.rows);
        });
    }
    consulta5(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //await cliente.connect()
            const query = 'select * from cuentahabientes;';
            const rs = yield database_1.default.execute(query);
            //await cliente.shutdown();
            res.json(rs.rows);
        });
    }
}
const indexController = new IndexController();
exports.default = indexController;
