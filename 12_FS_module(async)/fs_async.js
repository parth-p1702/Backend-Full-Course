const fs = require("fs")
const path = require("path")

const newFile  = "fs_async.txt"
const pathFile  = path.join(__dirname,newFile)

// 1). write/Create a file:- Writes data to a file asynchronously (non-blocking).
// ->If the file already exists → it replaces/overwrites the content.
// ->If the file does not exist → it creates a new one.

// Syntax:- fs.writeFile(path, data[, options], callback)

// Parameters:
// path → File path (string, Buffer, or URL).
// data → Content to write (string or Buffer).
// options (optional):
//         i) encoding → 'utf8' (default).
//        ii) mode → File permissions (default: 0o666).
//        iii) flag → Default is 'w' (write → replaces file).
// callback → A function with (err) parameter.

// Code:-

// fs.writeFile(pathFile,"This is Data of Async file","utf-8",(err)=>{
//     if(err) console.error(err);
//     else console.log("File has been Saved");
// })

// 2) fs.readFile() :- Allows reading input asynchronously line by line.
// syntax:- fs.readFile(path,Options,callback)

// fs.readFile(pathFile,"utf-8",(err,data)=>{
//     if(err) console.error(err);
//     else console.log(data);
// })

// otherwise we can also used this method :-    
// fs.readFile(pathFile,(err,data)=>{
//     if(err) console.error(err);
//     else console.log(data.toString());
// })

// 3) Update file:- Appends the data into file. If the file doesn't exist, it is created.
// Syntax :- fs.appendFile(path,data,options,callback)

// fs.appendFile(pathFile,"\nThis is Updated Data","utf-8",(err)=>{
//     if(err) console.error(err);
//     else console.log("File has Been Updated");
// })

// 4) Delete file:- Delete the file in asynchronously.
// Syntax:- fs.unlink(path,callback)

// fs.unlink(pathFile,(err)=>{
//     if(err) console.error(err);
//     else console.log("File has Been Deleted");
// })