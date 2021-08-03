const Sequelize = require("sequelize");

module.exports = class Image extends Sequelize.Model {
  static init(sequelize) {
    return super.init({
      src: {
        type: Sequelize.STRING(200),
        allowNull: true
      }
    }, {
      modelName: "Image",
      tableName: "images",
      charset: "utf8mb4",
      collate: "utf8mb4_general_ci", // 이모티콘 저장
      sequelize
    });
  }

  static associate(db) {
    db.Image.belongsTo(db.Profile);
  };
};