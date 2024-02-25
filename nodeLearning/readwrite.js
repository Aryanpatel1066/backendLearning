//***read the content of file */

//step1: creat object
// read in manner of syncronus
// const fs = require('fs');

// console.log("before starting to read");
// const content = fs.readFileSync("input.txt");
// console.log("output content is:"+content)


//read in manner of asyncronus
// const fs = require('fs');

// fs.readFile('input.txt',(err,content)=>{
//     if(err){
//         return console.log(err)
//     }
//     console.log("content of file is:"+content)
// })
// console.log("last line")


////** write the file */

//syncronus way
// const fs = require('fs');
// console.log("before");
// fs.writeFileSync("output.txt","hello everyone")
// console.log("after")

//asyncronus way
console.log("first line");
const fs = require('fs');
fs.writeFile('output2.txt',"hello student",err=>{
    if(err){
        return console.log(err);
    }
    console.log("written success fully")
})
console.log("last line")