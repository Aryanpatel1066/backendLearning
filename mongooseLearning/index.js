 const mongoose = require('mongoose');
 const studentmodel = require('./models/student.model')
 mongoose.connect("mongodb://localhost/lordkrishna2");
 
 const db = mongoose.connection;  
 
 db.on("error", () => {
     console.log("Error... not connected");
 });
 
 db.once("open", () => {
     console.log("Connected to the database");
    init();
 });
async function init(){
    //insert the date in db
    const student={
        name:'aryan',
        age:20,
    }
 const stud_obj= await  studentmodel.create(student)
 console.log(stud_obj)
 }
 