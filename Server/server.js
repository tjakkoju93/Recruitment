const express = require("express");
const app = express();

const port = process.env.PORT || 5280;

//Connection to data base
require("./connection/db");

//defining models
require("./model/user_model");
require("./model/job_model");

//creating routes
const jobRouter = require("./routes/job_routes.js");
const employeeRouter = require("./routes/employee_routes");
// const employer_router = require("./routes/employer_routes");

//using routes
app.use('api/v1/jobs', jobRouter);
app.use('api/v1/employee',employeeRouter)
// app.use('api/v1/employer',employer_router)

app.get("/", (req, res) => {
  res.status(200).send("<h1> This is Home page");
});

app.get("/", () => {
  console.log("hello");
});

app.listen(port, () => {
  console.log(`connected to port ${port}`);
});
