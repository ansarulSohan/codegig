const Sequelize = require('sequelize');
module.exports = new Sequelize(
  'postgres://postgres:ndub@4321@localhost:5432/codegig'
);
