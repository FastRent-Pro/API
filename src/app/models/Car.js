import Sequelize, { Model } from 'sequelize';

class Car extends Model {
  static init(sequelize) {
    super.init(
      {
        descricao: Sequelize.STRING,
        seguro_atual: Sequelize.STRING,
        quilometragem: Sequelize.STRING,
        cor: Sequelize.STRING,
        modelo: Sequelize.STRING,
        ano: Sequelize.STRING,
        marca: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );
  }

  static associate(models) {
    this.belongsTo(models.User, { foreignKey: 'cod_pessoa' });
    this.belongsTo(models.Company, { foreignKey: 'cod_empresa' });
  }
}

export default Car;
