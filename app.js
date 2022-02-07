require('express-async-errors');
const chalk = require('chalk');
const express = require('express');
const exphbs = require('express-handlebars');
const sequelize = require('./config/database');
const errorHandler = require('./middlewares/errorHandler');
const path = require('path');
const app = express();

//View Engine
app.engine(
  'handlebars',
  exphbs.engine({
    defaultLayout: 'main',
    runtimeOptions: {
      allowProtoPropertiesByDefault: true,
      allowProtoMethodsByDefault: true,
    },
  })
);
app.set('view engine', 'handlebars');

//set static folder
app.use(express.static(path.join(__dirname, 'public')));

//Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Test DB Connection
sequelize
  .authenticate()
  .then(() => console.log(chalk.yellowBright('Success!!!')))
  .catch(chalk.red.bold('Failed'));

//Index route
app.get('/', (req, res) => res.render('index', { layout: 'landing' }));
//Routes
app.use('/gigs', require('./routes/gigs'));

//Error Handler Middleware
app.use(errorHandler);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(chalk.green.bold(`Server running at port ${PORT}`));
});
