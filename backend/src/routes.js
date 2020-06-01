import { Router } from 'express';
import ProductController from './app/controllers/ProductController';

const routes = new Router();

routes.get('/produtos/pesquisa', ProductController.index);
routes.post('/produtos/cadastro', ProductController.store);
routes.delete('/produtos/deletar/:id', ProductController.delete);
routes.put('/produtos/atualizar/:id', ProductController.update);

export default routes;
