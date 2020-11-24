const { mongo, Mongoose } = require("mongoose");

const mongoose = require('mongoose');
const {Schema} = mongoose

const EmployeeSchema = new Schema({
    id: {type: String},
    employee_name: {type: String},
    employee_salary: {type: String},
    employee_age: {type: String},
    profile_image: {type:String, default:""},
})

module.exports = mongoose.model('Employee', EmployeeSchema);