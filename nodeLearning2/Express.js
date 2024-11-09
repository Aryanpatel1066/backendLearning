const express = require("express");
 
const app = express();
app.listen(1111,()=>{
    console.log("server started")
})
app.get("/",(req,res)=>{
    res.end("welcome from express server..")
})