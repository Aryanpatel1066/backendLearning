const http = require('http');
const server = http.createServer((req,res)=>{
    if(req.url=="/hello"){
        res.end("hello world");
    }
    else if(req.url=="/aryan"){
        res.end("the mern dev aryan");
    }
    else{
        res.writeHead(404);
        res.end("the route does not exist");
    }
})
server.listen(8080,()=>{
    console.log("server start... ")
})