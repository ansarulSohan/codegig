require("express-async-errors");
const express = require("express");
const exphbs = require("express-handlebars");
const sequelize = require("./config/database");

const app = express();

sequelize
  .authenticate()
  .then(() => console.log("Success!!!"))
  .catch("Failed");

app.get("/", (req, res) => res.send("INDEX"));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running at port ${PORT}`);
});
