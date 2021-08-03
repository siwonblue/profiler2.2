const Sequelize = require("sequelize");

module.exports = class Profile extends Sequelize.Model {
  static init(sequelize) {
    return super.init({
      name: {
        type: Sequelize.STRING(20),
        allowNull: false
      },
      intro: {
        type: Sequelize.STRING(40),
        allowNull: true
      },
      today: {
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: true
      },
      total: {
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: true
      }
    }, {
      modelName: "Profile",
      tableName: "profiles",
      charset: "utf8mb4",
      collate: "utf8mb4_general_ci", // 이모티콘 저장
      sequelize
    });
  }
  static associate(db) {
    db.Profile.hasMany(db.Image); //
    db.Profile.hasMany(db.Contact); //profile.addContacts, profile.getContacts
    db.Profile.belongsTo(db.User); // profile.addUser, profile.getUser, profile.setUser
    db.Profile.belongsToMany(db.Hashtag, { through: "ProfileTag" }); //profile.addHashtags
    db.Profile.belongsToMany(db.Profile, { through: "Like", as: "Liking", foreignKey: "LikerId" }); // 내가 좋아요 누른 프로필을 찾으려면 나를 먼저 찾야아해서 likerId
    db.Profile.belongsToMany(db.Profile, { through: "Like", as: "Liker", foreignKey: "LikingId" }); // 위랑 같은 논리로 반대로 먼저 찾아주는 id
  };
};