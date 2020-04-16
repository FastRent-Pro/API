import { Op } from 'sequelize';
import User from '../models/User';

class UserController {
  async store(req, res) {
    const userExists = await User.findOne({
      where: {
        [Op.or]: [
          { email: req.body.email },
          { cpf: req.body.cpf },
          { numero: req.body.numero },
        ],
      },
    });
    if (userExists) {
      return res.status(400).json({ error: 'User already exists' });
    }
    const user = await User.create(req.body);
    return res.json(user);
  }
}

export default new UserController();
