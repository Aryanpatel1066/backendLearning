// const http = require('http');
// //create server
// const server = http.createServer((req,res)=>{
//     if(req.url == "/hello"){
//         res.end("hello world");
//     }
//     else{
//        res.end("this is wrong url")
//     }
// })
// //start the server
// server.listen(1066,()=>{
//     console.log("server is started");
// })

//
const http = require('http');
//create the server
const server = http.createServer((req,res)=>{
    if(req.url === "/pado"){
        res.end("this is response from aryan server")
    }
    else{
        res.end("oops! wrong url");
    }
})

//start the server 
server.listen(8000,()=>{
    console.log("server was hit")
})