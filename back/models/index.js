const Sequelize = require("sequelize");
const env = process.env.NODE_ENV || "development";
const config = require("../config/config")[env];
const User = require("./user");
const Profile = require("./profile");
const Hashtag = require("./hashtag");
const Image = require('./image')
const Contact = require('./contact')

const db = {};
const sequelize = new Sequelize(config.database, config.username, config.password, config);
//위 코드는 sequelize가 node, mysql을 연결시키는 코드임.

db.User = User;
db.Profile = Profile;
db.Hashtag = Hashtag;
db.Image = Image;
db.Contact = Contact;

User.init(sequelize);
Profile.init(sequelize);
Hashtag.init(sequelize);
Image.init(sequelize);
Contact.init(sequelize);

User.associate(db);
Profile.associate(db);
Hashtag.associate(db);
Image.associate(db);
Contact.associate(db);


Object.keys(db).forEach((modelName) => {
  db[modelName].init(sequelize);
});

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
