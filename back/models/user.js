const Sequelize = require('sequelize');

module.exports = class User extends Sequelize.Model {
  static init(sequelize) {
    return super.init({
      email: {
        type: Sequelize.STRING(30),
        allowNull: true,
        unique: true,
      },
      provider: {
        type: Sequelize.STRING(10),
        allowNull: false,
        defaultValue: 'SNS',
      },
      snsId: {
        type: Sequelize.STRING(100),
        allowNull: true,
      },
      age: {
        type: Sequelize.STRING(10),
        allowNull: true,
      },
      gender: {
        type: Sequelize.STRING(10),
        allowNull: true,
      },
    }, {
      sequelize,
      modelName: 'User',
      tableName: 'users',
      charset: 'utf8mb4',
      collate: 'utf8mb4_general_ci',
    });
  }

  static associate(db) {
    db.User.hasMany(db.Profile);
  }
};
