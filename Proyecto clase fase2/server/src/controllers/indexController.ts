import { Request, Response } from 'express';
import cliente from '../database'

class IndexController{
    
    index(req:Request, res:Response){
        res.send("Hello");
    }

    public async consulta3(req:Request, res:Response) : Promise<void>{
        //await cliente.connect()
        const query = 'select * from cuentahabientes;';
        const rs =  await cliente.execute(query)
        //await cliente.shutdown();
        res.json(rs);
    }
}

const indexController = new IndexController();
export default indexController;