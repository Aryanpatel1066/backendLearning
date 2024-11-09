const fs = require('fs')

// read asyncronous manner
/** fs.readFile('input.txt', 'utf8', (err, content) => {
//     if (err) {
//         console.error("Oops! Error:", err);
//         return;
//     }
//     console.log("The content is:", content);
// });
console.log("read from last"); */

//synchronous file reading
// 
// const content = fs.readFileSync('input.txt','utf8');
// console.log("read content is ",content);
// console.log("read from last")

//write the content async manner 
fs.writeFile('input.txt',"hello dev",(er)=>{
    if(er){
        return console.log(err)
    }
    console.log("successfully ")
})