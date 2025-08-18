/**
 * Path Module in Node.js
 * -----------------------
 * The 'path' module provides utilities for working with file and directory paths.
 * It helps in resolving, joining, parsing, and extracting information from paths 
 * in a platform-independent way (works on Windows, Linux, Mac).
 */

const { log } = require("console");
const path = require("path");

// __dirname gives the current directory path of this file
console.log("__dirname:", __dirname);

// __filename gives the absolute path of this file
console.log("__filename:", __filename);

// 1. path.join() → Joins paths into a single normalized path
const filePath = path.join("main", "students", "data.txt");
console.log("Joined Path:", filePath);

// 2. path.resolve() → Gives the absolute path (starting from root)
const absPath = path.resolve("main", "students", "data.txt");
console.log("Resolved Absolute Path:", absPath);

// 3. path.extname() → Returns the extension of the file
console.log("File Extension:", path.extname(filePath)); // .txt

// 4. path.basename() → Returns the file name (with extension)
console.log("Base Name:", path.basename(filePath)); // data.txt

// 5. path.dirname() → Returns the directory name
console.log("Directory Name:", path.dirname(filePath)); // main/students

// 6. path.parse() → Returns an object with detailed path info
const parsed = path.parse(filePath);
console.log("Parsed Path Object:", parsed);
/**
 * Example Output:
 * {
 *   root: '',
 *   dir: 'main/students',
 *   base: 'data.txt',
 *   ext: '.txt',
 *   name: 'data'
 * }
 */

// 7. path.sep → Returns the platform-specific separator
console.log("Path Separator:", path.sep); 
// On Windows: \ , On Linux/Mac: /
