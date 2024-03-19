const mongoose = require('mongoose')

const studentModel = require("./models/student.model");
//where to connecth
mongoose.connect('mongodb://localhost/be_learning');

const db= mongoose.connection;//start the connection with mdb;

db.on("error",()=>{
    console.log("error while connectting database")
});
db.once("open",()=>{
    console.log("successfully connect with the database");
    init();
});
async function init(){
    const student = {
        name:"aryan",
        age:20
    }
    const  stud_obj = await studentModel.create(student);
    console.log(stud_obj)
}