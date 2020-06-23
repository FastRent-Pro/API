import { Router } from 'express';
import UserController from './app/controllers/UserController';
import CompanyController from './app/controllers/CompanyController';
import CarController from './app/controllers/CarController';

const routes = new Router();

routes.get('/', (req, res) => {
  res.json({ message: 'hello' });
});
routes.get('/teste', (req, res) => {
  res.json({ message: 'POR FAVOR FUNCIONA' });
});
routes.post('/users', UserController.store);
routes.post('/companies', CompanyController.store);
routes.post('/cars', CarController.store);
routes.post('/cars/plate', CarController.checkCarStatus);
routes.post('/car/id', CarController.getCar);
routes.get('/cars/coord', CarController.coordinates);

export default routes;
