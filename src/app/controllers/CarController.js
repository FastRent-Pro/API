import Car from '../models/Car';
import User from '../models/User';
import Company from '../models/Company';

class CompanyController {
  async store(req, res) {
    // const companyExists = await Car.findOne({
    //   where: { [Op.or]: [{ email: req.body.email }, { cnpj: req.body.cnpj }] },
    // });
    // if (companyExists) {
    //   return res.status(400).json({ error: 'Company already exists' });
    // }
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
}

export default new CompanyController();
