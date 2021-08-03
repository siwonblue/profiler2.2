const Sequelize = require("sequelize");

module.exports = class Contact extends Sequelize.Model {
  static init(sequelize) {
    return super.init({
      title: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      url: {
        type: Sequelize.STRING(200),
        allowNull: false,
      },
    }, {
      modelName: "Contact",
      tableName: "contacts",
      charset: "utf8mb4",
      collate: "utf8mb4_general_ci", // 이모티콘 저장
      sequelize
    });
  }

  static associate(db) {
    db.Contact.belongsTo(db.Profile);
  };
};