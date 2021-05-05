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
            let cui = req.body['cui'];
            let nombre = req.body['nombre'];
            let apellido = req.body['apellido'];
            const query = 'select * from operaciones_por_cuentahabiente where cui = ? and nombre = ? and apellido = ? ;';
            const rs = yield database_1.default.execute(query, [cui, nombre, apellido]);
            res.json(rs.rows);
        });
    }
    consulta21(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let institucion = req.body['institucion'];
            const query = 'select institucion, sum(monto) as total_debito from creditosdebitos_por_institucion where institucion = ? and tipo = \'debito\';';
            const rs = yield database_1.default.execute(query, [institucion]);
            res.json(rs.rows);
        });
    }
    consulta22(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let institucion = req.body['institucion'];
            const query = 'select institucion, sum(monto) as total_credito from creditosdebitos_por_institucion where institucion = ? and tipo = \'credito\';';
            const rs = yield database_1.default.execute(query, [institucion]);
            res.json(rs.rows);
        });
    }
    consulta3(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = 'select * from cuentahabientes;';
            const rs = yield database_1.default.execute(query);
            res.json(rs.rows);
        });
    }
    consulta4(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = 'select * from instituciones_bancarias;';
            const rs = yield database_1.default.execute(query);
            res.json(rs.rows);
        });
    }
    consulta5(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let cui = req.body['cui'];
            let nombre = req.body['nombre'];
            let apellido = req.body['apellido'];
            let mes = req.body['mes'];
            let anio = req.body['anio'];
            const query = 'select * from operaciones_por_cuentahabiente_por_mes where cui = ? and nombre = ? and apellido = ? and mes = ? and anio = ?';
            const rs = yield database_1.default.execute(query, [cui, nombre, apellido, mes, anio]);
            res.json(rs.rows);
        });
    }
}
const indexController = new IndexController();
exports.default = indexController;
