const mongoose = require('mongoose');
const port = 8000;


(async ()=>{
    try {
        await mongoose.connect('mongodb://localhost/employee', {useNewUrlParser: true});
        console.log("Connected to MongoDB Successfully.")
    } catch (error) {
        console.log(`Error Connecting to MongoDB. Reason is: ${error}`)
    }
})()

require('./models/employee.js');

const app = require('./index.js');

app.listen(port, "127.0.0.1", ()=>{
    console.log(`Connected to server with port ${port}`)
})
