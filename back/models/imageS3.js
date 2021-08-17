const Sequelize = require('sequelize');

module.exports = class ImageS3 extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        src: {
          type: Sequelize.STRING(400),
          allowNull: true,
        },
      },
      {
        modelName: 'ImageS3',
        tableName: 'imageS3s',
        charset: 'utf8mb4',
        collate: 'utf8mb4_general_ci', // 이모티콘 저장
        sequelize,
      },
    );
  }

  static associate(db) {
    db.ImageS3.belongsTo(db.User);
  }
};
