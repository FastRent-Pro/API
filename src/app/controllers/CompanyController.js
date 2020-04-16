import { Op } from 'sequelize';
import Company from '../models/Company';

class CompanyController {
  async store(req, res) {
    const companyExists = await Company.findOne({
      where: { [Op.or]: [{ email: req.body.email }, { cnpj: req.body.cnpj }] },
    });
    if (companyExists) {
      return res.status(400).json({ error: 'Company already exists' });
    }
    const company = await Company.create(req.body);
    return res.json(company);
  }
}

export default new CompanyController();
