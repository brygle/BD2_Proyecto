import { Request, Response } from 'express';
import cliente from '../database'

class IndexController{
    
    index(req:Request, res:Response){
        res.send("Hello");
    }

    public async consulta1(req:Request, res:Response) : Promise<void>{
        //await cliente.connect()
        const query = 'select * from cuentahabientes;';
        const rs =  await cliente.execute(query)
        //await cliente.shutdown();
        res.json(rs.rows);
    }
    
    public async consulta2(req:Request, res:Response) : Promise<void>{
        //await cliente.connect()
        const query = 'select * from cuentahabientes;';
        const rs =  await cliente.execute(query)
        //await cliente.shutdown();
        res.json(rs.rows);
    }

    public async consulta3(req:Request, res:Response) : Promise<void>{
        //await cliente.connect()
        const query = 'select * from cuentahabientes;';
        const rs =  await cliente.execute(query)
        //await cliente.shutdown();
        res.json(rs.rows);
    }

    public async consulta4(req:Request, res:Response) : Promise<void>{
        //await cliente.connect()
        const query = 'select * from cuentahabientes;';
        const rs =  await cliente.execute(query)
        //await cliente.shutdown();
        res.json(rs.rows);
    }

    public async consulta5(req:Request, res:Response) : Promise<void>{
        //await cliente.connect()
        const query = 'select * from cuentahabientes;';
        const rs =  await cliente.execute(query)
        //await cliente.shutdown();
        res.json(rs.rows);
    }
}

const indexController = new IndexController();
export default indexController;