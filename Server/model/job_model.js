const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../connection/db");

const jobs = sequelize.define("jobs",{
  company_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  role: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  technologies: {
    type: DataTypes.ENUM,
    allowNull: false,
    values: ["Java", "Python", "JavaScript", "React JS", "Node JS"],
  },
  experience: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  location: {
    type: DataTypes.ENUM,
    allowNull: false,
    values: ["Hyderabad", "Pune", "Chennai", "Banglore", "Delhi", "Mumbai"],
    defaultValue: "Hyderabad",
  },
  graduate: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  language: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: "English",
  },
  notice_period: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

sequelize
  .sync()
  .then(() => {
    console.log("User table has been successfully created.");
  })
  .catch((err) => {
    console.error("Unable to create table:", err);
  });


module.exports = jobs;