const { Sequelize, DataTypes } = require("sequelize");
require("dotenv").config();

//

const sequelize = new Sequelize("career_bridge", "root", "Jakkoju@1993", {
  host: "localhost",
  dialect: "mysql", // or 'postgres', 'sqlite', 'mssql'
});

//Checking for connection
sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });

module.exports = sequelize;
