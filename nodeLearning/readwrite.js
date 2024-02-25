//step1: creat object
// read in manner of syncronus
// const fs = require('fs');

// console.log("before starting to read");
// const content = fs.readFileSync("input.txt");
// console.log("output content is:"+content)


//read in manner of asyncronus
const fs = require('fs');

fs.readFile('input.txt',(err,content)=>{
    if(err){
        return console.log(err)
    }
    console.log("content of file is:"+content)
})
console.log("last line")