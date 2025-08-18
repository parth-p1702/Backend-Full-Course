const fs = require("fs")
const path = require("path")

const fileName = "promises.txt"
const filePath = (__dirname,fileName)
const filePath1 = path.join(__dirname)
// Check file avilable in folder/directory
// fs.promises.readdir(filePath1).then((data)=>console.log(data)).catch((err)=>console.error(err))

// Perform CRUD operations Uing Promises.

// 1.Create(Write a file):-
// Syntax:- fs.promises.writeFile(path,data,options).then().catch()

// fs.promises.writeFile(filePath,"This content created using promises","utf-8").then(console.log("File is created")).catch((err)=>console.log(err));

// 2. Read File:-
// Syntax:- fs.promises.readFile(path,option).then().catch()

// fs.promises.readFile(filePath,"utf-8").then((data)=>console.log(data)).catch((err)=>console.log(err));

// 3. Updated File:-
// Syntax:- fs.promises.writeFile(path,data,option).then().catch()

//  fs.promises.appendFile(filePath,"\nThis updated content","utf-8").then(console.log("File is Updated")).catch((err)=>console.log(err));

// 4.Delete file:-
// Syntax:- fs.promises.unlink(path).then().catch()

// fs.promises.unlink(filePath).then(console.log("Successfully Deleted")).catch((err)=>console.error(err));

