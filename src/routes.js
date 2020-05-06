import { Router } from 'express';
import UserController from './app/controllers/UserController';
import CompanyController from './app/controllers/CompanyController';
import CarController from './app/controllers/CarController';

const routes = new Router();

routes.get('/', (req, res) => {
  res.json({ message: 'hello' });
});
routes.post('/users', UserController.store);
routes.post('/companies', CompanyController.store);
routes.post('/cars', CarController.store);
routes.post('/cars/plate', CarController.checkCarStatus);

export default routes;
