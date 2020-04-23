module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('renters', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      conta: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      agencia: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      codPessoa: {
        type: Sequelize.INTEGER,
        references: { model: 'users', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: queryInterface => {
    return queryInterface.dropTable('renters');
  },
};
