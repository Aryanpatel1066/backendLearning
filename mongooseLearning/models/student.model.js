//import the mongoose
const mongoose = require('mongoose');
//define the schema
const  studentSchemas = new mongoose.Schema({
    name:String,
    age:Number
},{versionKey:false,timestamps:true})
 
module.exports = mongoose.model("Student", studentSchemas);
