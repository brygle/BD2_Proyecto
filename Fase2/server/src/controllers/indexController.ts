import { Request, Response } from 'express';
import cliente from '../database'

class IndexController{
    
    index(req:Request, res:Response){
        res.send("Hello");
    }

    public async consulta1(req:Request, res:Response) : Promise<void>{
        let cui = req.body['cui']
        let nombre = req.body['nombre']
        let apellido = req.body['apellido']
        const query = 'select * from operaciones_por_cuentahabiente where cui = '+ cui +' and nombre = ? and apellido = ? ;';
        const rs =  await cliente.execute(query, [nombre, apellido])
        res.json(rs.rows);
    }

    public async consulta21(req:Request, res:Response) : Promise<void>{
        let institucion = req.body['institucion']
        const query = 'select institucion, sum(monto) as total_debito from creditosdebitos_por_institucion where institucion = ? and tipo = \'debito\';';
        const rs =  await cliente.execute(query, [institucion])
        res.json(rs.rows);
    }

    public async consulta22(req:Request, res:Response) : Promise<void>{
        let institucion = req.body['institucion']
        const query = 'select institucion, sum(monto) as total_credito from creditosdebitos_por_institucion where institucion = ? and tipo = \'credito\';';
        const rs =  await cliente.execute(query, [institucion])
        res.json(rs.rows);
    }

    public async consulta3(req:Request, res:Response) : Promise<void>{
        const query = 'select * from cuentahabientes;';
        const rs =  await cliente.execute(query)
        res.json(rs.rows);
    }

    public async consulta4(req:Request, res:Response) : Promise<void>{
        const query = 'select * from instituciones_bancarias;';
        const rs =  await cliente.execute(query)
        res.json(rs.rows);
    }

    public async consulta5(req:Request, res:Response) : Promise<void>{
        let cui = req.body['cui']
        let nombre = req.body['nombre']
        let apellido = req.body['apellido']
        let mes = req.body['mes']
        let anio = req.body['anio']
        const query = 'select * from operaciones_por_cuentahabiente_por_mes where cui = '+ cui + ' and nombre = ? and apellido = ? and mes = ' +mes+ ' and anio = ' + anio + ';';
        const rs =  await cliente.execute(query, [nombre, apellido])
        res.json(rs.rows);
    }

    public async registrarCuentahabiente(req:Request, res:Response) : Promise<void>{
        let cui = req.body['cui']
        let nombre = req.body['nombre']
        let apellido = req.body['apellido']
        let genero = req.body['genero']
        let saldo = req.body['saldo']
        let email = req.body['email']
        let institucion = req.body['institucion']
        let abreviacion = req.body['abreviacion']
        let fecha_registro = req.body['fecha_registro']
        let tipo = req.body['tipo']
        const query = 'insert into cuentahabientes (cui, nombre, apellido, email, genero, saldo, institucion, abreviacion, fecha_registro, tipo) values ( '+cui+', ?, ?, ?,?, '+ saldo +',?,?,?,?);';
        const rs =  await cliente.execute(query, [nombre, apellido, email, genero, institucion, abreviacion, fecha_registro, tipo])
        res.json({"msg": "exito"});
    }

    public async registrarInstitucion(req:Request, res:Response) : Promise<void>{
        let institucion_bancaria = req.body['institucion_bancaria']
        let abreviacion = req.body['abreviacion']
        const query = 'insert into instituciones_bancarias (institucion_bancaria, abreviacion) values (? , ?);';
        await cliente.execute(query, [institucion_bancaria, abreviacion])
        res.json({"msg": "exito"});
    }
}

const indexController = new IndexController();
export default indexController;