import { Router } from 'express';
import indexController from '../controllers/indexController';

class IndexRoutes{

    public router : Router = Router();

    constructor(){
        this.config();
    }

    config(): void {
        this.router.get('/', indexController.index);
        this.router.post('/consulta1', indexController.consulta1);
        this.router.post('/consulta21', indexController.consulta21);
        this.router.post('/consulta22', indexController.consulta22);
        this.router.post('/consulta3', indexController.consulta3);
        this.router.post('/consulta4', indexController.consulta4);
        this.router.post('/consulta5', indexController.consulta5);
        this.router.post('/RegistroCuentahabiente', indexController.registrarCuentahabiente);
        this.router.post('/RegistroInstitucionBancaria', indexController.registrarInstitucion);
    }

}

const indexRoutes = new IndexRoutes();
export default indexRoutes.router;