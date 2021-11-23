const Sequelize = require("sequelize");
const config = require("../config/config.json");

const { username, password, database, host, dialect } = config.development;

const sequelize = new Sequelize(database, username, password, {
  host,
  dialect,
});

const Qna = require("./qnas")(sequelize, Sequelize.DataTypes);

const db = {};
db.QnA = Qna;

module.exports = db;
