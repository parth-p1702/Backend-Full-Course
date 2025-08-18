// FS(File Module) in node.js:-

const fs = require("fs")
const path = require("path")

const fileName = "fs.txt"
const filePath = path.join(__dirname,fileName)
// - The FS a core module that allows you to work with fie system, enabling you to read, write, update, delete and watch files.

// 1.fs.writeFileSync(file, data[, options])
// 🔹 Parameters:-

//    file → File path (string, Buffer, or URL).
//    data → The content to write (string or Buffer).
//    options (optional) → Can include:
//             i) encoding → Default: 'utf8'
//             ii) mode → File permission, default: 0o666
//             iii)flag → How to open the file, default: 'w' (write, overwrite)

// Code:-

// const fileName = "fs.txt";

// const writeFile = fs.writeFileSync(fileName,"This file creted by fs module","utf-8")
// console.log(writeFile);


// 2.fs.readFileSync:- Reads a file's content and returns it as a string or Buffer
// Syntax :- fs.readFile(path[, options])

// 🔹 Parameters :-
// path → File path (string, Buffer, or URL).
// options (optional):
//         i) encoding → 'utf8', 'ascii', 'base64', etc.
//        ii) flag → Default: 'r' (read).

// const readFile = fs.readFileSync(filePath,"utf-8")
// // if we not write 'utf-8' then write:-readFile.toString()
// console.log(readFile);


// 3) fs.appendFileSync() :- Appends data to a file. If does not exist then created it
// Syntax :fs.appendFileSync(path, data[, options])
// Parameters:

// path → File path (string, Buffer, or URL).
// data → Content you want to append.
// options (optional):
//         encoding → 'utf8' (default), 'ascii', etc.
//         mode → File permissions (default: 0o666).
//         flag → Default is 'a' (append).

// Code:-

// const appendFile = fs.appendFileSync(filePath,"\nThis is new Data","utf-8")
// console.log(appendFile);


// 4). fs.unlinkSync(filepath) :- Delete the file

// const deleteFile = fs.unlinkSync(filePath)
// console.log(deleteFile)

// 5). Rename File name
// Syntax:- fs.renameSync(oldpath,newpath)

// const newUpdateFile = "update.txt"
// const newFilePath = path.join(__dirname,newUpdateFile)
// const renameFile = fs.renameSync(filePath, newFilePath)
// console.log(renameFile);
