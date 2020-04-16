import { Router } from 'express';
import UserController from './app/controllers/UserController';
import CompanyController from './app/controllers/CompanyController';

const routes = new Router();

routes.get('/', (req, res) => {
  res.json({ message: 'hello' });
});
routes.post('/users', UserController.store);
routes.post('/companies', CompanyController.store);

export default routes;
