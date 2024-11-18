const mongoose = require('mongoose');

const  studentSchemas = new mongoose.Schema({
    name:String,
    age:Number
})
 
module.exports = mongoose.model("Student", studentSchemas);
