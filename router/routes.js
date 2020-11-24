const express = require('express');
const routes = express.Router();

const employeeController = require('../controller/EmployeeController.js')

routes.get('/load', employeeController.get_employee_api);

routes.get('/employee', employeeController.get);

routes.post('/employee', employeeController.create);

routes.put('/employee/:id', employeeController.update);

routes.delete('/employee/:id', employeeController.destroy);

routes.get('/employee/:id', employeeController.getById);

module.exports = routes;
