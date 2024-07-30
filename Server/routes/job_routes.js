const express = require("express");

const jobRouter = express.Router();

const { create_job } = require("../controller/job_controller");

jobRouter.get("/create_job", () => {
  console.log("from router.get");
});

module.exports = jobRouter;
