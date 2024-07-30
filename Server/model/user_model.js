const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../connection/db");

//define models
const Employee = sequelize.define("employee_details", {
  //defining attributes/fields/columns of table
  first_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  last_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  mobile: {

    type: DataTypes.BIGINT,
    allowNull: false,
  },
  role: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: "employee",
  },
  currentCompany: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  location: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  technologies: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  experience: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  preferred_location: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: "Hyderabad",
  },
  graduate: {
    type: DataTypes.ENUM,
    allowNull: false,
    values: ["B.E", "B.Tech", "Diploma", "Degree"],
  },
  noticePeriod: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 3,
  },
});

const Employer = sequelize.define("employer_details", {
  company_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  contact_number: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  company_type: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  address: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  about_company: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

// Sync all defined models to the DB
sequelize
  .sync()
  .then(() => {
    console.log("User table has been successfully created.");
  })
  .catch((err) => {
    console.error("Unable to create table:", err);
  });

module.exports = { Employee,Employer };
