const fs = require("fs")

// Synchronous task
console.log("Start");

// Synchronous task
const data = fs.readFileSync('file.text',"utf-8")
console.log("Sync",data);

// Asynchronous task
fs.readFile('file.txt',"utf-8",(err,data)=>{
    if(err) throw err;
    console.log(data);
})