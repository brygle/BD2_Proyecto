import { Router } from 'express';
import indexController from '../controllers/indexController';

class IndexRoutes{

    public router : Router = Router();

    constructor(){
        this.config();
    }

    config(): void {
        this.router.get('/', indexController.index);
        this.router.get('/consulta3', indexController.consulta3);
    }

}

const indexRoutes = new IndexRoutes();
export default indexRoutes.router;