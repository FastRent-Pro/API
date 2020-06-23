import api from '../../api';
import Car from '../models/Car';
import User from '../models/User';
import Company from '../models/Company';

class CarController {
  async store(req, res) {
    if (req.body.cod_pessoa) {
      const pessoaDoesNotExist = await User.findOne({
        where: { id: req.body.cod_pessoa },
      });
      if (!pessoaDoesNotExist) {
        return res.status(400).json({ error: 'User does not exists' });
      }
      if (req.body.cod_empresa) {
        return res.status(400).json({ erro: 'Can only have 1 relation' });
      }
    } else if (req.body.cod_empresa) {
      const empresaDoesNotExist = await Company.findOne({
        where: { id: req.body.cod_empresa },
      });
      if (!empresaDoesNotExist) {
        return res.status(400).json({ error: 'Company does not exists' });
      }
      if (req.body.cod_pessa) {
        return res.status(400).json({ erro: 'Can only have 1 relation' });
      }
    } else {
      return res
        .status(400)
        .json({ error: 'codigo da pessoa ou empresa necessaria' });
    }

    const car = await Car.create(req.body);
    return res.json(car);
  }

  async checkCarStatus(req, res) {
    const plate = req.body.car_plate;
    try {
      if (plate) {
        const carStatus = api.search(plate);
        console.log(carStatus);
        if (carStatus.situacao === 'Sem restrição') {
          res.json({
            message: 'Carro sem restrições',
            status: 'ok',
            carStatus,
          });
        } else if (carStatus.situacao === 'Furto') {
          res.json({
            message: 'Carro em situação de roubo',
            status: 'theft',
            carStatus,
          });
        } else if (carStatus.situacao === 'Pendências administrativas') {
          res.json({
            message: 'Carro se encontra com o acúmulo de dívidas',
            status: 'debt',
            carStatus,
          });
        }
      }
    } catch (error) {
      res.json(error.message);
    }
  }

  async coordinates(req, res) {
    res.json([
      { latitude: -1.456652, longitude: -48.485174, id: 4 },
      { latitude: -1.462492, longitude: -48.489878, id: 5 },
      { latitude: -1.433785, longitude: -48.468085, id: 6 },
    ]);
  }

  async getCar(req, res) {
    const { id } = req;
    const existCar = await Car.findOne({ where: id });
    if (!existCar) {
      return res.json('dont have a car with this id');
    }
    return res.json(existCar);
  }
}

export default new CarController();
