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
    //running query in mongo
    dbQuerys();
 });
async function init(){
    //insert the date in db
    const student={
        name:'aryan',
        age:20,
    }
 const stud_obj= await  studentmodel.create(student)
//  console.log(stud_obj)
 }
 

  async function dbQuerys(){
    //read the studen data
    try{
        const result =await studentmodel.findById('673c1991631716b7f8d6f631');
        // console.log(result)
    }
   catch(err){
    console.log("error..",err)
   }
   try{
   const result = await studentmodel.find({name:"aryan"});
//    console.log(result)
   }
   catch(err){
    console.log(err);
   }
   //deal with multiple condition
   try{
    const response2 = await studentmodel.where("age").gt("18").where("name").equals("aryan").limit(2)
    console.log(response2)
   }
   catch(err){
    console.log(err);
   }
  }