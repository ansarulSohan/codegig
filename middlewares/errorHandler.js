const chalk = require('chalk');

const errorHandler = (err, req, res, next) => {
  console.error(chalk.redBright.bold(err.message));
  console.log(err);
  res.status(500).send(err.message);
};
module.exports = errorHandler;
