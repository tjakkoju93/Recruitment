const express = require ('express');

const employeeRouter = express.Router();

const {create_employee} = require('../controller/employee_controller')

employeeRouter.get('/signup',create_employee)


module.exports = employeeRouter;