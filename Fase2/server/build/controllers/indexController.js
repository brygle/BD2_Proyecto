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
            const query = 'select * from operaciones_por_cuentahabiente where cui = ' + cui + ' and nombre = ? and apellido = ? ;';
            const rs = yield database_1.default.execute(query, [nombre, apellido]);
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
            const query = 'select * from operaciones_por_cuentahabiente_por_mes where cui = ' + cui + ' and nombre = ? and apellido = ? and mes = ' + mes + ' and anio = ' + anio + ';';
            const rs = yield database_1.default.execute(query, [nombre, apellido]);
            res.json(rs.rows);
        });
    }
    registrarCuentahabiente(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let cui = req.body['cui'];
            let nombre = req.body['nombre'];
            let apellido = req.body['apellido'];
            let genero = req.body['genero'];
            let saldo = req.body['saldo'];
            let email = req.body['email'];
            let institucion = req.body['institucion'];
            let abreviacion = req.body['abreviacion'];
            let fecha_registro = req.body['fecha_registro'];
            let tipo = req.body['tipo'];
            const query = 'insert into cuentahabientes (cui, nombre, apellido, email, genero, saldo, institucion, abreviacion, fecha_registro, tipo) values ( ' + cui + ', ?, ?, ?,?, ' + saldo + ',?,?,?,?);';
            const rs = yield database_1.default.execute(query, [nombre, apellido, email, genero, institucion, abreviacion, fecha_registro, tipo]);
            res.json({ "msg": "exito" });
        });
    }
    registrarInstitucion(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let institucion_bancaria = req.body['institucion_bancaria'];
            let abreviacion = req.body['abreviacion'];
            const query = 'insert into instituciones_bancarias (institucion_bancaria, abreviacion) values (? , ?);';
            yield database_1.default.execute(query, [institucion_bancaria, abreviacion]);
            res.json({ "msg": "exito" });
        });
    }
}
const indexController = new IndexController();
exports.default = indexController;
