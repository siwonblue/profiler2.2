const Sequelize = require("sequelize");

module.exports = class Hashtag extends Sequelize.Model {
  static init(sequelize) {
    return super.init({
      name: {
        type: Sequelize.STRING(20),
        allowNull: false
      }
    }, {
      modelName: "Hashtag",
      tableName: "hashtags",
      charset: "utf8mb4",
      collate: "utf8mb4_general_ci", // 이모티콘 저장
      sequelize
    });
  }

  static associate(db) {
    db.Hashtag.belongsToMany(db.Profile, { through: 'ProfileTag' });
  };
};