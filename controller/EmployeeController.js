const mongoose = require('mongoose');
const Employee = mongoose.model('Employee');
const requests = require('requests');
const axios = require('axios');

exports.get_employee_api = (req,res)=>{

    requests("http://dummy.restapiexample.com/api/v1/employees")
    .on("data", (chunkdata)=>{
        let api_data = JSON.parse(chunkdata).data;
        return res.status(200).json(api_data)
    })
    .on("end", ()=>{
        res.end();
        console.log("API DATA FINISHED.")
    })
    .on("error", (err)=>{
        console.log("Error")
        console.log(err)
        return res.status(500).json(err)
    })
    
}

exports.get = async (req,res)=>{
    const employee = await Employee.find({});
    return res.status(200).json({'data':employee})
}

exports.create = async (req,res)=>{
    let {id, employee_name, employee_salary, employee_age, profile_image} = req.body
    let employee = new Employee();
    employee.id = id;
    employee.employee_name = employee_name;
    employee.employee_salary = employee_salary;
    employee.employee_age = employee_age;
    employee.profile_image = profile_image;
    try {
        await employee.save()
        return res.status(201).json({'data':employee}) 
    } catch (error) {
        return res.status(400).json({'error':error}) 
    }
}

exports.update = async (req,res)=>{
    try {
        let instance = await Employee.findById(req.params.id)
        if(!instance){
            return res.status(204).json({'error':'No data found'})
        }
        else{
            let {id, employee_name, employee_salary, employee_age, profile_image} = req.body
            instance.id = id;
            instance.employee_name = employee_name;
            instance.employee_salary = employee_salary;
            instance.employee_age = employee_age;
            instance.profile_image = profile_image;
            await instance.save()
            return res.status(200).json({'data':instance})
        }
    } catch (error) {
        return res.status(400).json({'error':error})
    }
    
}

exports.destroy = async (req,res)=>{
    try {
        let instance = await Employee.findById(req.params.id)
        if(!instance){
            return res.status(404).json({'error':'No data found'})
        }
        else{
            await instance.remove()
            return res.status(204).json({})
        }
    } catch (error) {
        return res.status(400).json({'error':error})
    }
    
}

exports.getById = async (req,res)=>{
    try {
        let instance = await Employee.findById(req.params.id);
        return res.status(200).json({'data':instance});
    } catch (error) {
        return res.status(400).json({'error':error});
    }
    
}