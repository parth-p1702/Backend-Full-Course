const fs = require("fs");
const path = require("path");

const fileName = "async_await.txt";
const filePath = (__dirname, fileName);
const filePath1 = path.join(__dirname) ;

// Async/await:- Modern and advnce method for promises based code
// Below code for checking avilable files
// const readFolder = async () => {
//   try {
//     const res = await fs.promises.readdir(filePath1);
//     console.log(res);
    
//   } catch (error) {
//     console.error(error);
//   }
// };
// readFolder()

// Now Perfrom CRUD operations:-

// 1.create:-
// syntax:- fs.promises.writeFile(path,DataTransfer,options)

// const writeFile = async () => {
//  try {
//     await fs.promises.writeFile(filePath,"This file created by async await","utf-8")
//    console.log("File is created");
//  } catch (error) {
//     console.error(error)
//  }
// }

// writeFile()

// 2.Reading:-

// const writeFile = async () => {
//  try {
//    const data = await fs.promises.readFile(filePath,"utf-8")
//    console.log(data);
//  } catch (error) {
//     console.error(error)
//  }
// }
// writeFile()

// 3. Updated:-

// const appendFile = async () => {
//  try {
//     await fs.promises.appendFile(filePath,"\nThis is updated Content","utf-8")
//    console.log("File is Updated");
//  } catch (error) {
//     console.error(error)
//  }
// }

// appendFile()

// 4. Delete:-

const deleteFile = async () => {
 try {
    await fs.promises.appendFile(filePath)
   console.log("File is Deleted");
 } catch (error) {
    console.error(error)
 }
}

deleteFile()