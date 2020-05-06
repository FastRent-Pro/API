import apii from '../../api';
import Car from '../models/Car';
import User from '../models/User';
import Company from '../models/Company';

class CompanyController {
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
        const carStatus = apii.search(plate);
        console.log(carStatus);
        if (carStatus.situacao === 'Sem restrição') {
          res.json({ message: 'Carro sem restrições' });
        } else if (carStatus.situacao === 'Furto') {
          res.json({ message: 'Carro em situação de roubo' });
        } else if (carStatus.situacao === 'Pendências administrativas') {
          res.json({ message: 'Carro se encontra com o acumulo de dívidas' });
        }
      }
    } catch (error) {
      res.json(error.message);
    }
  }
}

export default new CompanyController();
