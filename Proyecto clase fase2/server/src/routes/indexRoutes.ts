import { Router } from 'express';
import indexController from '../controllers/indexController';

class IndexRoutes{

    public router : Router = Router();

    constructor(){
        this.config();
    }

    config(): void {
        this.router.get('/', indexController.index);
        this.router.get('/consulta1', indexController.consulta1);
        this.router.get('/consulta2', indexController.consulta2);
        this.router.get('/consulta3', indexController.consulta3);
        this.router.get('/consulta4', indexController.consulta4);
        this.router.get('/consulta5', indexController.consulta5);
    }

}

const indexRoutes = new IndexRoutes();
export default indexRoutes.router;