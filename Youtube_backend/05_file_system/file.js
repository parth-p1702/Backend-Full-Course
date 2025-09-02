// File Handling:-
// is used to read or write files in the system.
import fs from "fs";

// Writing a file
// fs.writeFile("ex.txt", "Hello World", (err) => {
//   if (err) throw err;
//   console.log("File has been saved!");
// });

// Read file
// fs.readFile("ex.txt", "utf-8", (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });

// Updated file
// fs.appendFile("ex.txt", "Hello World My name is parth", (err) => {
//   if (err) throw err;
//   console.log("File has been updated!");
// });

// **Delete file**:-
// fs.unlink("ex.txt", (err) => {
//   if (err) throw err;
//   console.log("File has been deleted!");
// });

// **Copy file**:-
fs.copyFile("ex.txt", "ex2.txt", (err) => {
  if (err) throw err;
  console.log("File has been copied!");
});